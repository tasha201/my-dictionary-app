import Dictionary from "./Dictionary.js"
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/dictionary-7042549-5728137.png"
            className="logo"
            alt="dictionary logo"
          />
          <h1>Dictionary App</h1>
        </header>

        <Dictionary defaultKeyword='sunrise' />

        <footer>
          This project was coded by <strong>Natalia Pavlyk</strong> and is {" "}
          <a
            href="https://github.com/tasha201/my-dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub {" "}
          </a>
          and
          <a
            href="https://gorgeous-swan-fdaaeb.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          > {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
