from flask import Flask, request
import speech_recognition as sr
import time
import json 

#IMPORTANT: all methods must return jsonp

app = Flask(__name__)

#simple speech to text method goes here
@app.route('/speechToString', methods=['GET'])
def speechToString():
    funcname = request.args.get('callback')
    string_in = ''
    with sr.Microphone() as source:
        audio = r.listen(source)
    try:
        string_in = r.recognize_google(audio)
    except:
        pass

    return jsonp(dict(success=string_in), funcname)


#converts your return value into jsonp type
# needs: a dictionary of return values, and a funcname
def jsonp(dictionary, funcname = None):
    if (funcname):
        # wrap the dictionary in the callback parameter
        return "%s(%s)" % (funcname, dictionary)
    return dictionary


if __name__ == '__main__':
    app.run()
