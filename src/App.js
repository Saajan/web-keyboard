
import React, { Component } from 'react';
import {
  Slider, Select, Row, Col, InputNumber
} from 'antd';

import { createNoteTable } from './helpers/midi';

import OctaveKey from './components/octavekeys';

import 'antd/dist/antd.css';
import './App.css';

const Option = Select.Option;


class App extends Component {
  state = {
    volume: 0.5,
    type: "square",
    keys: []
  }

  onChange = (value) => {
    this.setState({
      volume: value,
    });
  }

  handleChange = (value) => {
    this.setState({
      type: value,
    });
    console.log(`selected ${value}`);
  }

  componentDidMount() {
    this.setState({
      keys: createNoteTable()
    })
  }

  render() {
    const { volume, type } = this.state;
    return (
      <div>
        <div className="container">
          {this.state.keys.map((keys, index) => {
            return <OctaveKey key={"octave" + index} keys={keys} index={index} type={type} volume={volume}></OctaveKey>
          })}
        </div>
        <div className="settingsBar">
          <Row>
            <Col span={12}>
              <span>Volume: </span>
              <Slider
                min={0}
                max={1}
                step={0.01}
                onChange={this.onChange}
                value={typeof volume === 'number' ? volume : 0}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={1}
                step={0.01}
                style={{ marginLeft: 16 }}
                value={volume}
                onChange={this.onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <span>Current waveform: </span>
              <Select name="waveform" defaultValue="square" style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="sine">Sine</Option>
                <Option value="square">Square</Option>
                <Option value="sawtooth">Sawtooth</Option>
                <Option value="triangle">Triangle</Option>
              </Select>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}


export default App;
