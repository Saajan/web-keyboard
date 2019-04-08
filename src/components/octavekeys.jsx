
import React, { Component } from 'react';

import { getKeyData, playTone } from '../helpers/midi';

class OctaveKey extends Component {

    state = {
        currentKey: {}
    }

    onMouseDownHandler(value, key) {
        let data = getKeyData(value, key);
        this.setState({
            currentKey: playTone(data.freq)
        })
    }

    onMouseUpHandler() {
        this.state.currentKey.stop();
    }

    render() {
        return (
            <span className="octave-group">
                {Object.keys(this.props.keys).map((value, key) => {
                    return <button className={"octave-key " + (value.length == 1 ? 'minor' : 'major')} key={"key" + key}
                        onMouseDown={() => this.onMouseDownHandler(value, this.props.index)}
                        onMouseUp={() => this.onMouseUpHandler()}
                    >
                        <div>{value}</div>
                        <span>{this.props.index}</span>
                    </button>
                })}
            </span>
        )
    }
}

export default OctaveKey;