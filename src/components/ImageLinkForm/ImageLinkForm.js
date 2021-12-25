import React from "react";
import "./ImageLinkForm.css"
const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
  return(
  <div>
    <p>
      {'This Magic Brain will detect faces in your pictures. Git it a try.'}
    </p>
    <div>
      <div className="inputbox">
        <input type={'text'} onChange={onInputChange} />
        <button onClick={onButtonSubmit} >Detect</button> 
      </div>
    </div>
  </div>
  )
}
export default ImageLinkForm;