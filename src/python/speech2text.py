import speech_recognition as sr
import time

r = sr.Recognizer()

name_in = ''
with sr.Microphone() as source:
    audio = r.listen(source)
    print('got it, thanks !')

try:
    name_in = r.recognize_google(audio)
    # f.write(name_in)
except:
    pass

print(name_in)
