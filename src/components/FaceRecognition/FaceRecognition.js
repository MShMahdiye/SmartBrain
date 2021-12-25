import React from "react";
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl}) => {
  return(
    <div>
      <div className="img">
        <img alt="" src={imageUrl} width={'500px'} height={'auto'}></img>
      </div>
    </div>
  )
}

export default FaceRecognition;