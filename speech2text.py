from flask import Flask, request
import json 

#IMPORTANT: all methods must return jsonp

app = Flask(__name__)

#simple speech to text method goes here
@app.route('/speechToText', methods=['GET'])
def speechToText():
    funcname = request.args.get('callback')
    return jsonp(dict(success="It worked"), funcname)

#converts your return value into jsonp type
# needs: a dictionary of return values, and a funcname
def jsonp(dictionary, funcname = None):
    if (funcname):
        # wrap the dictionary in the callback parameter
        return "%s(%s)" % (funcname, dictionary)
    return dictionary


if __name__ == '__main__':
    app.run()
