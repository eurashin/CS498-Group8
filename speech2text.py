from flask import Flask, request
import speech_recognition as sr
import time
import json 

string_in = ''
with sr.Microphone() as source:
    audio = r.listen(source)
try:
    string_in = r.recognize_google(audio)
except:
    pass

print(string_in)
