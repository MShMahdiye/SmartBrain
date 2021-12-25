import React from "react";
import Tilt from 'react-tilt';
import "./Logo.css"

const Logo = () => {
  return (
    <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 80, width: 80 }} >
      <div className="Tilt-inner"> <img src="https://img.icons8.com/pastel-glyph/64/000000/brain--v1.png" /> </div>
    </Tilt>
  )
}

export default Logo;