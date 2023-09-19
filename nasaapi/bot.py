import pyttsx3
engine = pyttsx3.init('sapi5')

# Set Rate
engine.setProperty('rate', 150)

# Set Volume
engine.setProperty('volume', 1.0)

# Set Voice (Female)
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[1].id)


def speak(text):    
    engine.say(text)
    engine.runAndWait()

speak("Hello Prihwis, welcome to the JARVIS Information Database on Astronomical observations powered by the National Aeronautics and Space Administration. Please initialize your knowledge query!")