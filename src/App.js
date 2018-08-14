import React, { Component } from 'react';
import logo from './tonejs.png';
import Tone from 'tone'
import styled from 'styled-components'
import './App.css';

let synth = new Tone.Synth({
  "oscillator" : {
    "type": "pwm",
    "modulationFrequency": 2
  },
  "envelope" : {
    "attack" : 2,
    "decay" : 1,
    "sustain" : 20,
    "release" : 0.9,
  }
}).toMaster();

class NewToneTrack extends Component {

  
  playTheBeats(x) {
    synth.triggerAttack(x);
    console.log("playTheBeats");
  }
  stopTheBeats() {
    synth.triggerRelease();
    console.log("stoptheBeats");
  }

  render() {
    // let synth = new Tone.AMSynth().toMaster();
    
    let theNotes = ["C4", "D4", "E4", "F4", "G4", "A5", "B5"];
    console.log("run the function");
    let mapTheNotes = theNotes.map(x => {
      return (
        <div key={x} onMouseDown={() => this.playTheBeats(x)} onMouseUp={() => this.stopTheBeats()}>
          {x}
        </div>
      )
    })
    
    return (
      <KeyHolder>
        {mapTheNotes}
      </KeyHolder>
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
        <NewToneTrack />
        {/* <button onClick={ () => this.playThisNote(synth)}>PLAY THE PHAT TUNES</button> */}
      </div>
    );
  }
}

export default App;


const KeyHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 10%);
  grid-template-rows: 1fr;
  align-content: center;
  justify-content: center;
  width: 90%;
  height: auto;
  margin: 25px auto;
  div {
    display: grid;
    align-content: center;
    justify-content: center;
    height: 100px;
    margin: 1px;
    border: 2px solid black;
    background-color: #f1f1f1;
    font-weight: bold;
    transition: .5s;
    &:hover {
      background-color: #d1d1d1;
      transition: .5s;
    }
  }
`