from flask import Flask, render_template, Response
from flask_cors import CORS
import cv2
from ultralytics import YOLO
import cvzone
import math

app = Flask(__name__)
CORS(app)
cap = cv2.VideoCapture(0)
cap.set(3, 1280)
cap.set(4, 720)
model = YOLO('./Yolo-Weights/best.pt')
classNames = ['animal', 'beaver', 'bird', 'bison', 'bobcat', 'canine', 'cat', 'cervid', 'cougar', 'coyote', 'deer', 'dog', 'elk', 'fox', 'human', 'javelina', 'mesocarnivore', 'ringtail', 'rodent', 'sheep', 'skunk', 'squirrel']


def gen():
    cap = cv2.VideoCapture('http://192.170.20.105:8080/video')
    while True:
        success, img = cap.read()
        results = model(img, stream=True)
        for r in results:
            boxes = r.boxes
            for box in boxes:
                # Bounding Box
                x1, y1, x2, y2 = box.xyxy[0]
                x1, y1, x2, y2 = int(x1), int(y1), int(x2), int(y2)
                # cv2.rectangle(img, (x1, y1), (x2, y2), (255, 0, 255), 3)
                w, h = x2 - x1, y2 - y1
                cvzone.cornerRect(img, (x1, y1, w, h))
                # Confidence
                conf = math.ceil((box.conf[0] * 100)) / 100
                print(conf)

                # Class Name
                cls = int(box.cls[0])

                cvzone.putTextRect(img, f'{classNames[cls]} {conf}', (max(0, x1), max(35, y1)))
        ret, jpeg = cv2.imencode('.jpg', img)
        frame = jpeg.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@app.route('/')
def video_feed():
    return Response(gen(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run()
