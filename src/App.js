import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "./redux/actions";
import React from "react";

function App() {
  const translationFile = useSelector((state) => state.lang).translation;
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <code>{translationFile.HomePage.Title}</code>
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{translationFile.HomePage.indicator}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translationFile.HomePage.redirection}
        </a>
        <div className="btnContainer">
          <button
            className="lang-btn"
            onClick={() => {
              dispatch(setLanguage("EN"));
            }}
          >
            {translationFile.HomePage.ToEnglish}
          </button>
          <button
            className="lang-btn2"
            onClick={() => {
              dispatch(setLanguage("AR"));
            }}
          >
            {translationFile.HomePage.ToArabic}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
