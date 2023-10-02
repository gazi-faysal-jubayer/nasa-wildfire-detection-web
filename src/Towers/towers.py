from flask import Flask, jsonify
import csv

# Initialize Flask app
app = Flask(__name__)

# Load data from the CSV file into a list of dictionaries
positions_data = []

with open(r'C:\\Users\\Faysal\\OneDrive\\Desktop\\learning\\React Learning\\nasa-wildfire-detection-web\\src\\Towers\\california_positions.csv', 'r') as csvfile:
    reader = csv.DictReader(csvfile)
    i = 0
    for row in reader:
        i = i+1
        positions_data.append({
            "id": i,
            "original_latitude": float(row["Original Latitude"]),
            "original_longitude": float(row["Original Longitude"]),
            "shifted_latitude": float(row["Shifted Latitude"]),
            "shifted_longitude": float(row["Shifted Longitude"])
        })

# Flask endpoint to return the positions in JSON format
@app.route('/', methods=['GET'])
def get_positions():
    return jsonify(positions_data)

# Run the app (for demonstration purposes here, we won't actually execute this line)
if __name__ == '__main__':
    app.run(debug=True)


