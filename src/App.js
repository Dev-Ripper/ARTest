import "@google/model-viewer";
import test from './assets/test.glb';
import './App.css';

function App() {
  return (
    <div className="App">
      <model-viewer id="viewer" src={test} min-camera-orbit="auto auto 100%" max-camera-orbit="auto auto 100%" min-field-of-view="45deg" max-field-of-view="45deg" environment-image="neutral" auto-rotate camera-controls></model-viewer>
    </div>
  );
}
export default App;
