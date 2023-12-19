import DrumPad from "./DrumPad";
import Display from "./Display";
import { Component } from "react";

const btns = {
  Q: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  W: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  E: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  A: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  S: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  D: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  Z: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  X: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  C: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
    };
    console.log(Object.keys(btns));
    this.handlePress = this.handlePress.bind(this);

    document.addEventListener("keydown", (event) => {
      let key = event.key.toUpperCase();
      if (key === "Y") key = "Z";
      if (Object.keys(btns).includes(key.toUpperCase())) {
        let link = document.getElementById(key);
        link.dispatchEvent(
          new MouseEvent("mousedown", {
            bubbles: true,
          })
        );
      }
    });
  }

  handlePress(event, id) {
    this.setState({ display: id });
    let audio = document.getElementById("audio-" + event.target.id);
    audio.play();
  }

  render() {
    const drumpads = Array.from({ length: 9 }, (_, i) => (
      <DrumPad
        id={Object.keys(btns)[i]}
        audio={Object.values(btns)[i]}
        callback={this.handlePress}
      />
    ));
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-violet-300">
        <div
          id="drum-machine"
          className="flex flex-col justify-center items-center bg-violet-700 rounded-lg p-10 shadow-violet-900 shadow-lg"
        >
          <Display text={this.state.display} />
          <div className="grid grid-cols-3 grid-rows-3">{drumpads}</div>
        </div>
      </div>
    );
  }
}

export default App;
