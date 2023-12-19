import DrumPad from "./DrumPad";
import Display from "./Display";
import { Component } from "react";

const btns = {
  Q: {
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    name: "Heater 1",
  },
  W: {
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    name: "Heater 2",
  },
  E: {
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    name: "Heater 3",
  },
  A: {
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    name: "Heater 4",
  },
  S: {
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    name: "Clap",
  },
  D: {
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    name: "Open-HH",
  },
  Z: {
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    name: "Kick-n'-Hat",
  },
  X: {
    audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    name: "Kick",
  },
  C: {
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    name: "Closed-HH",
  },
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
    this.setState({ display: btns[id].name });
    let audio = document.querySelector("audio[id=" + id + "]");
    audio.play();
    //new Audio(btns[id].audio).play();
  }

  render() {
    const drumpads = Object.keys(btns).map((key) => {
      return (
        <DrumPad id={key} audio={btns[key].audio} callback={this.handlePress} />
      );
    });

    return (
      <div className="w-screen h-screen flex justify-center items-center bg-violet-300">
        <div
          id="drum-machine"
          className="grid grid-cols-3 grid-rows-4 bg-violet-700 rounded-lg p-10 shadow-violet-900 shadow-lg"
        >
          <Display text={this.state.display} />
          {drumpads}
        </div>
      </div>
    );
  }
}

export default App;
