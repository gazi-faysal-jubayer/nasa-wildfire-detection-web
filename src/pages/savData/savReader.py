# Python Flask API to serve the model
from flask import Flask, request, jsonify
import pickle
import sklearn
import scipy
import pandas as pd
import numpy as np
import seaborn as sns
from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split

pickled_model = pickle.load(open(r'C:\\Users\\Faysal\\OneDrive\\Desktop\\learning\\React Learning\\nasa-wildfire-detection-web\\src\\pages\\savData\\finalized_model_lg.pkl', 'rb'))

app = Flask(__name__)

# [[8.31, 214.3733, 22018.41744, 8.059, 356.88, 0, 18.43, 100.3417, 4.6287]]
# https://github.com/Nafi7393/Expenses-Tracker/blob/main/static/dashboard.js

@app.route('/lg_predict/<data>', methods=['GET'])
def predict(data):
    try:
        data = eval(data)
        # Get data from the request
        # Perform inference
        prediction = pickled_model.predict(data)
        # Return the prediction as JSON
        return jsonify({'prediction': prediction.tolist()})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
