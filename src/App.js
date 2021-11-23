import "@google/model-viewer";
import test from './assets/test.glb';
import './App.css';

function App() {
  return (
    <div className="App">
      <model-viewer id="viewer" src={test} shadow-intensity="1" ar ar-modes="webxr scene-viewer quick-look" camera-controls min-camera-orbit="auto auto 100%" max-camera-orbit="auto auto 100%" min-field-of-view="45deg" max-field-of-view="45deg" environment-image="neutral" auto-rotate ></model-viewer>
    </div>
  );
}
export default App;
