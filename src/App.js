import logo from './logo.svg';
import bck from './bck.jpg';
import './style.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img  src={bck} className="App-logo" alt="logo" />
        <p>
          Düzenle <code>src/App.js</code> ve kaydet.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
