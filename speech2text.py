import speech_recognition as sr
import time

string_in = ''
r = sr.Recognizer()
with sr.Microphone() as source:
    audio = r.adjust_for_ambient_noise(source)
    audio = r.listen(source)
try:
    string_in = r.recognize_google(audio)
except:
    pass

print(string_in)
