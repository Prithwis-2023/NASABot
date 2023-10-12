/* 
 * The MIT License
 *
 * Copyright 2018 Bruce Schubert.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import Globe from '/static/js/Globe.js';
import LayersViewModel from '/static/js/LayersViewModel.js';
import SettingsViewModel from '/static/js/SettingsViewModel.js';
// import ToolsViewModel from './ToolsViewModel.js';
// import MarkersViewModel from './MarkersViewModel.js';
// import SearchViewModel from './SearchViewModel.js';
import SearchPreviewViewModel from '/static/js/SearchPreviewViewModel.js';

/* global $, ko, WorldWind, tlejs */

const TLE_URL = "https://tle.ivanstanojevic.me/api/tle/49044"
const ISS_ALTITUDE = 400e3 // m


$(document).ready(function () {
  "use strict";
  
  // Set your Bing Maps key which is used when requesting Bing Maps resources.
  // Without your own key you will be using a limited WorldWind developer's key.
  // See: https://www.bingmapsportal.com/ to register for your own key and then enter it below:
  const BING_API_KEY = "AkyR-M4f-UQSypl0i_-U4f0rEdjG4Q-PSrQHN09Wdmv1mnRII1C-GMHOZHll-Gis";
  if (BING_API_KEY) {
    // Initialize WorldWind properties before creating the first WorldWindow
    WorldWind.BingMapsKey = BING_API_KEY;
  } else {
    console.error("app.js: A Bing API key is required to use the Bing maps in production. Get your API key at https://www.bingmapsportal.com/");
  }
  
  // Set the MapQuest API key used by their Nominatim service.
  // Get your own key at https://developer.mapquest.com/
  // Without your own key you will be using a limited WorldWind developer's key.
  const MAPQUEST_API_KEY = "";
  
  // ---------------------
  // Initialize the globe
  // ----------------------

  // Create the primary globe
  let globe = new Globe("globe-canvas");
    
  // Add layers ordered by drawing order: first to last
  globe.addLayer(new WorldWind.BMNGLayer(), {
    category: "base"
  });
  globe.addLayer(new WorldWind.BMNGLandsatLayer(), {
    category: "base",
    enabled: false
  });
  globe.addLayer(new WorldWind.BingAerialLayer(), {
    category: "base",
    enabled: false
  });
  globe.addLayer(new WorldWind.BingAerialWithLabelsLayer(), {
    category: "base",
    enabled: false,
    detailControl: 1.5
  });
  globe.addLayerFromWms("https://tiles.maps.eox.at/wms", "osm", {
    category: "base",
    enabled: false
  });
  globe.addLayer(new WorldWind.BingRoadsLayer(), {
    category: "overlay",
    enabled: false,
    detailControl: 1.5,
    opacity: 0.80
  });
  globe.addLayerFromWms("https://tiles.maps.eox.at/wms", "overlay", {
    category: "overlay",
    displayName: "OpenStreetMap overlay by EOX",
    enabled: false,
    opacity: 0.80
  });
  // globe.addLayer(new WorldWind.RenderableLayer("Markers"), {
  //   category: "data",
  //   displayName: "Markers",
  //   enabled: true
  // });
  globe.addLayer(new WorldWind.CoordinatesDisplayLayer(globe.wwd), {
    category: "setting"
  });
  globe.addLayer(new WorldWind.ViewControlsLayer(globe.wwd), {
    category: "setting",
    enabled: false
  });
  globe.addLayer(new WorldWind.CompassLayer(), {
    category: "setting",
    enabled: false
  });
  globe.addLayer(new WorldWind.StarFieldLayer(), {
    category: "setting",
    enabled: true,
    displayName: "Stars"
  });
  globe.addLayer(new WorldWind.AtmosphereLayer(), {
    category: "setting",
    enabled: true,
    time: new Date()//'2022-10-01T06:00Z') // activates day/night mode
  });
  // globe.addLayer(new WorldWind.ShowTessellationLayer(), {
  //   category: "debug",
  //   enabled: false
  // });

  const orbitLayer = new WorldWind.RenderableLayer("Orbit")
  globe.addLayer(orbitLayer, {
    category: "data",
    enabled: true
  });
  const ISSLayer = new WorldWind.RenderableLayer("ISS");
  globe.addLayer(ISSLayer, {
    category: "data",
    enabled: true
  });
  
  // Create and assign the path's attributes.
  const orbitShapeAttrs = new WorldWind.ShapeAttributes(null);
  // orbitShapeAttrs.outlineColor = WorldWind.Color.BLUE;
  orbitShapeAttrs.interiorColor = new WorldWind.Color(1, 1, 1, 0.2);
  // orbitShapeAttrs.drawVerticals = orbit.extrude; //Draw verticals only when extruding.

  fetch(TLE_URL).then(response => response.json())
  .then((tleData) => {
    console.log(tleData)
    const { line1, line2 } = tleData
    const tleStr = `${line1}\n${line2}`

    tlejs.getGroundTracks({
      tle: tleStr,
      stepMS: 60e3,
      isLngLatFormat: false, 
    }).then(([ previous, current, next ]) => {
      const orbit = new WorldWind.Path(
        [...previous, ...current, ...next].map(([ lat, lon ]) => new WorldWind.Position(lat, lon, ISS_ALTITUDE)),
        orbitShapeAttrs
      )
      orbit.pathType = WorldWind.GREAT_CIRCLE
      orbit.numSubSegments = 100
    
      orbit.altitudeMode = WorldWind.ABSOLUTE
      // orbit.followTerrain = true;
      orbit.extrude = true; // Make it a curtain.
      orbit.useSurfaceShapeFor2D = true; // Use a surface shape in 2D mode.
      
      // // Create and assign the path's highlight attributes.
      // const highlightAttributes = new WorldWind.ShapeAttributes(orbitShapeAttrs);
      // highlightAttributes.outlineColor = WorldWind.Color.RED;
      // highlightAttributes.interiorColor = new WorldWind.Color(1, 1, 1, 0.5);
      // orbit.highlightAttributes = highlightAttributes;
    
      // Add the path to a layer and the layer to the WorldWindow's layer list.
      orbitLayer.addRenderable(orbit)
      
      let { lat, lng } = tlejs.getLatLngObj(tleStr)

      var colladaLoader = new WorldWind.ColladaLoader(
        new WorldWind.Position(lat, lng, ISS_ALTITUDE),
        { dirPath: 'static/images/' }
      )
      
      colladaLoader.load("ISS.dae", function (ISSModel) {
        ISSModel.scale = 2e6;
        ISSLayer.addRenderable(ISSModel)

        globe.wwd.goTo(new WorldWind.Location(lat, lng));

        setInterval(() => {
          let { lat, lng } = tlejs.getLatLngObj(tleStr)
          ISSModel.position = new WorldWind.Position(lat, lng, ISS_ALTITUDE)
          globe.refreshLayer(ISSLayer);
        }, 1e3);
      });

    })
  })
  
  
  // -----------------------------------------------
  // Initialize Knockout view models and html views
  // -----------------------------------------------

  let layers = new LayersViewModel(globe);
  let settings = new SettingsViewModel(globe);
  // let markers = new MarkersViewModel(globe);
  // let tools = new ToolsViewModel(globe, markers);
  let preview = new SearchPreviewViewModel(globe, MAPQUEST_API_KEY);
  // let search = new SearchViewModel(globe, preview.previewResults, MAPQUEST_API_KEY);
  
  // Activate the Knockout bindings between our view models and the html
  ko.applyBindings(layers, document.getElementById('layers'));
  ko.applyBindings(settings, document.getElementById('settings'));
  // ko.applyBindings(markers, document.getElementById('markers'));
  // ko.applyBindings(tools, document.getElementById('tools'));
  // ko.applyBindings(search, document.getElementById('search'));
  ko.applyBindings(preview, document.getElementById('preview'));
  
  // ---------------------------------------------------------
  // Add UI event handlers to create a better user experience
  // ---------------------------------------------------------

  // Auto-collapse the main menu when its button items are clicked
  $('.navbar-collapse a[role="button"]').click(function () {
    $('.navbar-collapse').collapse('hide');
  });
  // Collapse card ancestors when the close icon is clicked
  $('.collapse .close').on('click', function () {
    $(this).closest('.collapse').collapse('hide');
  });
});
