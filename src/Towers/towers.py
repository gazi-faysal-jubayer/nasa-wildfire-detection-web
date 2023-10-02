from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/', methods=['GET'])
def get_random_forest_coordinates():
    latitude_longitude_pairs = []
    
    # Rough bounding box for Sierra National Forest
    min_lat, max_lat = 36.9, 37.7
    min_lon, max_lon = -119.6, -118.8

    for _ in range(50):
        lat = random.uniform(min_lat, max_lat)
        lon = random.uniform(min_lon, max_lon)
        latitude_longitude_pairs.append({"latitude": lat, "longitude": lon})

    return jsonify(latitude_longitude_pairs)

if __name__ == '__main__':
    app.run(debug=True)
