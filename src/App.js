import React, { Component } from 'react';
import logo from './tonejs.png';
import Tone from 'tone'
import './App.css';

let synth = new Tone.Synth({
  "oscillator" : {
    "type": "pwm",
    "modulationFrequency": 2
  },
  "envelope" : {
    "attack" : 0.2,
    "decay" : 1,
    "sustain" : 2,
    "release" : 0.9,
  }
}).toMaster();

class NewToneTrack extends Component {
  
  playTheBeats() {
    synth.triggerAttack("D3", "1", 2);
    synth.triggerAttack("F3", "1", 2);
    synth.triggerAttack("A2", "1", 2);
    console.log("playTheBeats");
  }
  stopTheBeats() {
    synth.triggerRelease();
    console.log("funtion runner");
  }

  render() {
    // let synth = new Tone.AMSynth().toMaster();
    console.log("run the function");
    
    return (
      <div style={{display: "grid", alignContent: "center", justifyContent: "center"}}>
        <div onMouseDown={() => this.playTheBeats()} onMouseUp={() => this.stopTheBeats()} style={{width: "75px", height: "75px", backgroundColor: "teal"}}></div>
      </div>
    )
  }
}

class App extends Component {
  // playThisNote(synth) {
  //   synth.triggerAttackRelease('C4', 0.5, 0)
  //   synth.triggerAttackRelease('E4', 0.5, 1)
  //   synth.triggerAttackRelease('G4', 0.5, 2)
  //   synth.triggerAttackRelease('B4', 0.5, 3)
  // }
  render() {
    // var synth = new Tone.Synth().toMaster();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tone.js Playground</h1>
        </header>
        <div style={{padding: "50px 25px"}}>
          <NewToneTrack />
        </div>
        {/* <button onClick={ () => this.playThisNote(synth)}>PLAY THE PHAT TUNES</button> */}
      </div>
    );
  }
}

export default App;
