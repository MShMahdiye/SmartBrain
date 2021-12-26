import React, {Component} from "react";
import Navigation from "./components/Navigation/Navigation";
import Clarifai from 'clarifai';
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Rank from "./components/Rank/Rank";
import Logo from "./components/Logo/Logo";
import Particles from "react-tsparticles";
import "./App.css";

const app = new Clarifai.App({ apiKey: "310bc6a13f4b44d1a30ce0e62263ce26", apiEndpoint: "https://api.clarifai.com"});
const deepClone = obj => JSON.parse(JSON.stringify(obj));

class App extends Component{

  constructor(){
    super();
    this.state={
      input : '',
      imageUrl: '',
      box: []
    }
  }

  calculateFaceLocation = (data) => {
    let result = []
    let box = []
    const obj = deepClone(data)
    console.log("object:;;", obj.outputs[0]);
    obj.outputs[0].data.regions.map((robo, i) => {
      const data2 = robo.region_info.bounding_box;
      console.log("-----");
      console.log(data2);
      result.push(data2)
    })
      
    // if (Array.isArray(data)){
     
    // }
    console.log("/////////");
    console.log(result);
    console.log("/////////");
    // const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    result.forEach((item) => {
      console.log("item its here ::",item);
      box.push({
      leftCol : item.left_col * width,
      topRow : item.top_row * height,
      rightCol : width - (item.right_col * width),
      bottomRow : height - (item.bottom_row * height)
    })
    console.log("im box in forEach : ",this.state.box);
    console.log("box foreach" , box);
    
  })
  return box;
    // return{
    //   leftCol : clarifaiFace.left_col * width,
    //   topRow : clarifaiFace.top_row * height,
    //   rightCol : width - (clarifaiFace.right_col * width),
    //   bottomRow : height - (clarifaiFace.bottom_row * height)
    // }
  } 

  displayFaceBox = (box) => {
    this.setState({box : box});
  }

  onInputChange = (event) => {
    // console.log(event);
    // console.log(event.target.value);
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    // .then(res =>console.log(res))
    .then(response => {this.displayFaceBox(this.calculateFaceLocation(response))})
    // .then(response => {console.log(response.outputs[0].data.regions[0].region_info.bounding_box);})
    .catch(err => console.log(err));
   
  }
  
  render(){
    console.log("hiii its your new box : ",this.state.box);
    console.log("box is here",this.state.box);
    const particlesInit = (main) => {
      console.log(main);
  
      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
    return(
      <div className="App">
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value:  "linear-gradient(45deg,  #30e9ff, #0d0551);",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 4,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 120,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange}  onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    )
  }
}

export default App;