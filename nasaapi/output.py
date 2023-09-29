import main
from main import *
import time
import speech_recognition as sr
import tensorflow as tf
import pprint
from prettytable import PrettyTable

api_key = "svyPAHaHfTxd2ReJfyk1jIWJAjUD0T0m5cdN6ZHE"

nasa = Client(api_key)


print(nasa.image('nebula')['collection']['items'])



'''
# obtain audio from the microphone
r = sr.Recognizer()
m = sr.Microphone()

with m as source:
    r.adjust_for_ambient_noise(source)


def callback(recognizer, audio):
    try:
        # You can download the data here: http://download.tensorflow.org/models/speech_commands_v0.01.zip
        spoken = recognizer.recognize_tensorflow(audio, tensor_graph='speech_recognition/tensorflow-data/conv_actions_frozen.pb', tensor_label='speech_recognition/tensorflow-data/conv_actions_labels.txt')
        print(spoken)
    except sr.UnknownValueError:
        print("Tensorflow could not understand audio")
    except sr.RequestError as e:
        print("Could not request results from Tensorflow service; {0}".format(e))


stop_listening = r.listen_in_background(m, callback, phrase_time_limit=0.6)
time.sleep(100)
'''