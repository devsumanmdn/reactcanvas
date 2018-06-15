import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionX: 0,
      positionY: 0
    };
  }
  drawPoint = e => {
    var canvas = document.getElementById("myCanvas");
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var ctx = canvas.getContext("2d");
    var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    
    // That's how you define the value of a pixel //
    function drawPixel (x, y, r, g, b, a) {
        var index = (x + y * canvasWidth) * 4;
    
        canvasData.data[index + 0] = r;
        canvasData.data[index + 1] = g;
        canvasData.data[index + 2] = b;
        canvasData.data[index + 3] = a;
    }
    
    // That's how you update the canvas, so that your //
    // modification are taken in consideration //
    function updateCanvas() {
        ctx.putImageData(canvasData, 0, 0);
    }
  }
  updatePos = e => {
    this.setState({
      positionX: e.pageX,
      positionY: e.pageY
    });
    e.target.getContext('2d')
  };
  render() {
    return (
      <div
        className="App"
        style={{ width: "100vw", height: "100vh", backgroundColor: "#eee" }}
      >
        <div style={{textAlign: 'center', paddingTop: '20px'}}>
          position: {this.state.positionX}, {this.state.positionY}
        </div>
        <canvas onMouseMove={this.updatePos} id="canvas" width="600" height="600" style={{border: '1px solid #d3d3d3'}}></canvas>
      </div> 
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
