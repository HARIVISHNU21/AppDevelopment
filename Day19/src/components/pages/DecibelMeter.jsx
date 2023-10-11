import React, { Component } from 'react';

class DecibelMeter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dBLevel: 0,
    };
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.analyser = this.audioContext.createAnalyser();
    this.microphone = null;
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
  }

  componentDidMount() {
    this.initializeAudio();
  }

  initializeAudio() {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        this.microphone = this.audioContext.createMediaStreamSource(stream);
        this.microphone.connect(this.analyser);
        this.analyser.connect(this.audioContext.destination);
        this.analyser.fftSize = 256;

        const updateDecibel = () => {
          this.analyser.getByteFrequencyData(this.dataArray);
          const rms = this.calculateRMS(this.dataArray);
          const dBLevel = this.calculateDB(rms);
          this.setState({ dBLevel });
          requestAnimationFrame(updateDecibel);
 
        

        };

        updateDecibel();
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  }

  calculateRMS(dataArray) {
    const sum = dataArray.reduce((acc, val) => acc + val * val, 0);
    const mean = sum / dataArray.length;
    return Math.sqrt(mean);
  }

  calculateDB(rms) {
    const reference = 1.0; // Adjust this value based on your calibration
    if (rms === 0) return -Infinity;
    return 20 * Math.log10(rms / reference);
  }

  componentWillUnmount() {
    if (this.microphone) {
      this.microphone.disconnect();
    }
  }

  render() {
    return (
      <div>
        <h1>Decibel Meter</h1>
        <p>dB Level: {this.state.dBLevel ? this.state.dBLevel.toFixed(2) + ' dB' : 'Calculating...'}</p>
      </div>
    );
  }
}

export default DecibelMeter;
