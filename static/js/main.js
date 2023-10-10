// Browser test function
function isES6() {
    try {
        Function("() => {};");
        return true;
    } catch (exception) {
        return false;
    }
}

// Test for browser support
if (!isES6()) {
    alert("Your browser isn't supported! Please use another one.");
}

// Script loader
function loadScripts(scripts) {
    let total = scripts.length;
    let index = 0;

    return scripts.reduce((currentPromise, scriptUrl) => {
        return currentPromise.then(() => {
            return new Promise((resolve, reject) => {
                // Update status message
                updatePreStatus("Loading scripts... " + index + "/" + total);

                // Load script
                let script = document.createElement('script');
                script.async = true;
                script.src = scriptUrl;
                script.onload = () => resolve();
                document.getElementsByTagName('head')[0].appendChild(script);

                index++;
            });
        });
    }, Promise.resolve());
}

function updatePreStatus(message) {
    document.getElementById("pre-status").innerText = message;
}

// Load scripts
loadScripts([
    // Dependencies
    "/static/js/utils/stats.min.js",
    "/static/js/utils/satellite.min.js",
    "/static/js/utils/jquery.min.js",
    "/static/js/utils/three/three.min.js",
    "/static/js/utils/three/OrbitControls.js",
    "/static/js/utils/three/GLTFLoader.js",
    "/static/js/utils/three/lensflare.js",
    "/static/js/utils/three/three-text2d.min.js",
    "/static/js/utils/three/DRACOLoader.js",

    // Satellite Tracker Source
    "/static/js/utils/LoadingProgress.js",
    "/static/js/utils/position_utils.js",
    "/static/js/satellite/Registry.js",
    "/static/js/satellite/Satellite.js",
    "/static/js/satellite/SatellitePositionAtTime.js",
    "/static/js/satellite/SatelliteModel.js",
    "/static/js/satellite/Port.js",
    "/static/js/satellite/State.js",
    "/static/js/satellite/iss/ISS.js",
    "/static/js/SatelliteTracker.js",
    "/static/js/render/scenes/SpaceScene.js",
    "/static/js/render/scenes/HUDScene.js",
    "/static/js/render/TextureRegistry.js",
    "/static/js/render/Renderer.js"
]).then(() => {
    // Remove pre status
    document.getElementById("pre-status").remove();

    // Start satellite tracker
    window.app = new SatelliteTracker("canvas");
});