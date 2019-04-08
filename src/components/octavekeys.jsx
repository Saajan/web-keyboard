
import React, { Component } from 'react';

import { getKeyData } from '../helpers/midi';

let audioContext = new (window.AudioContext || window.webkitAudioContext);

let masterGainNode = audioContext.createGain();
masterGainNode.connect(audioContext.destination);
masterGainNode.gain.value = 5;

class OctaveKey extends Component {

    onMouseDownHandler(value, key) {
        let data = getKeyData(value, key);

        console.log(data);
    }

    onMouseUpHandler(value, key) {
        let data = getKeyData(value, key);

        console.log(data);
    }

    render() {
        console.log(this.props.keys);
        return (
            <span className="octave-group">
                {Object.keys(this.props.keys).map((value, key) => {
                    //console.log(value, key);
                    if (value.length == 1) {
                        return <button className="octave-key minor" key={"key" + key}
                            onMouseDown={() => this.onMouseDownHandler(value, this.props.index)}
                            onMouseUp={() => this.onMouseUpHandler(value, this.props.index)}
                            >
                            <div>{value}</div>
                            <span>{this.props.index}</span>
                        </button>
                    } else {
                        return <button className="octave-key major" key={"key" + key}
                            onMouseDown={() => this.onMouseDownHandler(value, this.props.index)}
                            onMouseUp={() => this.onMouseUpHandler(value, this.props.index)}
                            >
                            <div>{value}</div>
                            <span>{this.props.index}</span>
                        </button>

                    }
                })}
            </span>
        )
    }
}

export default OctaveKey;