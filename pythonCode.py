from flask import Flask, request
import json 

app = Flask(__name__)
@app.route('/speechToText', methods=['GET'])
def speechToText():
    val = json.dumps(['hey this works'])
    return(val) 


if __name__ == '__main__':
    app.run()
