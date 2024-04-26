// Load module from Skypack CDN
import AudioMotionAnalyzer from "https://cdn.skypack.dev/audiomotion-analyzer?min";

// Create an AudioContext
const audioContext = new AudioContext();

// Get the audio element
const audioElements = document.getElementsByTagName('audio');

// Instantiate analyzer
const audioMotion = new AudioMotionAnalyzer(
  document.getElementById("container"),
  {
    height: 400,
    ansiBands: false,
    showScaleX: false,
    bgAlpha: 0,
    overlay: true,
    mode: 1,
    frequencyScale: "log",
    radial: true,
    showPeaks: false,
    channelLayout: "dual-vertical",
    smoothing: 0.7
  }
);

audioMotion.connectInput(audioElements[0]);
audioMotion.connectInput(audioElements[1]);