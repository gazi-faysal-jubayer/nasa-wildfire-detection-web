// import React, { useRef, useEffect } from 'react';

// const Webcam = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//       navigator.mediaDevices.getUserMedia({ video: true })
//         .then((stream) => {
//           let video = videoRef.current;
//           video.srcObject = stream;
//           video.play();
//         })
//         .catch((err) => {
//           console.log("An error occurred: " + err);
//         });
//     }
//   }, []);

//   return (
//     <div>
//       <video ref={videoRef} width="640" height="480" />
//     </div>
//   );
// }

// export default Webcam;

import React from 'react';

const Webcam = () => {
    return (
        <div id="webcam" className='webcam'>
        <div className='container'>
        <div className="section-title">
            <h2>CCTV Footage</h2>
          </div>
            <img src="http://127.0.0.1:5000/" alt="Webcam feed with object detection" />
        </div>
        </div>
    );
}

export default Webcam;
