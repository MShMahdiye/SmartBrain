import React from "react";
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl,box}) => {
  return(
    <div className="biggest">
      <div className="img">
        <img id="inputimage" alt="" src={imageUrl} width='500px' height='auto' />
        {
          box.map((item) => 
          <div key={item.bottomRow} className="bounding-box" 
          style={{top: item.topRow, right: item.rightCol, bottom: item.bottomRow, left: item.leftCol}}>
          </div>
        )}
      </div>
    </div>
  )
}

export default FaceRecognition;