import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [word, setword] = useState("");
  let [Result, setresult] = useState(null);
  let [audio, setAudio] = useState(null);
  function bdlav(e) {
    setword(e.target.value);
  }
  async function clickme() {
    let response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    let data = await response.json();

    setresult(data[0].meanings[0].definitions[0].definition);
    setAudio(data[0].phonetics[0]?.audio || "");
  }
  return (
    <>
      <h1>Angrezi Shabadkosh</h1>
      <input type="text" placeholder="word" onChange={bdlav} value={word} />
      <button onClick={clickme}>Here We Go</button>
      <h2>Result : {Result}</h2>
      <h2>
        {audio ? <a href={audio}>Click to Listen</a> : "No audio available"}
      </h2>
    </>
  );
}

export default App;
