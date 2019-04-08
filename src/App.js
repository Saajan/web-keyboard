
import React, { Component } from 'react';

import { createNoteTable } from './helpers/midi';
import OctaveKey from './components/octavekeys';
import './App.css';

class App extends Component {

  state = {
    keys: []
  }

  componentDidMount() {
    this.setState({
      keys: createNoteTable()
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          {this.state.keys.map((keys, index) => {
            return <OctaveKey key={"octave" + index} keys={keys} index={index}></OctaveKey>
          })}
        </div>
        <div className="settingsBar">
          <div className="left">
            <span>Volume: </span>
            <input type="range" min="0.0" max="1.0" step="0.01"
              value="0.5" list="volumes" name="volume" />
            <datalist id="volumes">
              <option value="0.0" label="Mute"></option>
              <option value="1.0" label="100%"></option>
            </datalist>
          </div>
          <div className="right">
            <span>Current waveform: </span>
            <select name="waveform">
              <option value="sine">Sine</option>
              <option value="square">Square</option>
              <option value="sawtooth">Sawtooth</option>
              <option value="triangle">Triangle</option>
              <option value="custom">Custom</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
