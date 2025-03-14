import { useState } from "react";
import "./App.css";

const natoAlphabet = {
  a: "alpha",
  b: "bravo",
  c: "charlie",
  d: "delta",
  e: "echo",
  f: "foxtrot",
  g: "golf",
  h: "hotel",
  i: "india",
  j: "juliett",
  k: "kilo",
  l: "lima",
  m: "mike",
  n: "november",
  o: "oscar",
  p: "papa",
  q: "quebec",
  r: "romeo",
  s: "sierra",
  t: "tango",
  u: "uniform",
  v: "victor",
  w: "whiskey",
  x: "x-ray",
  y: "yankee",
  z: "zulu",
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  "!": "exclamation mark",
  '"': "double quote",
  "#": "hash",
  "$": "dollar sign",
  "%": "percent sign",
  "&": "ampersand",
  "'": "apostrophe",
  "(": "left parenthesis",
  ")": "right parenthesis",
  "*": "asterisk",
  "+": "plus sign",
  ",": "comma",
  "-": "hyphen",
  ".": "period",
  "/": "slash",
  ":": "colon",
  ";": "semicolon",
  "<": "less than",
  "=": "equals sign",
  ">": "greater than",
  "?": "question mark",
  "@": "at symbol",
  "[": "left square bracket",
  "\\": "backslash",
  "]": "right square bracket",
  "^": "caret",
  "_": "underscore",
  "`": "grave accent",
  "{": "left curly brace",
  "|": "vertical bar",
  "}": "right curly brace",
  "~": "tilde"
};

function App() {
  const [inputText, setInputText] = useState("");
  const [inputTranslated, setInputTranslated] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleOutputText = () => {
    let translatedText = []; 
    for (let i = 0; i < inputText.length; i++) {
      let char = inputText[i].toLowerCase(); 
      if (natoAlphabet[char]) {
        let value = natoAlphabet[char];
  
        const translatedValue = value.includes(" ") ? `"${value}"`: value;
        const color = i % 2 === 0 ? "black" : "blue";

        translatedText.push(
          <span key={i} style={{ color: color }}>{translatedValue}{" "}</span>
        );
      } else {
        const color = i % 2 === 0 ? "black" : "blue";
        translatedText.push(
          <span key={i} style={{ color: color }}>{char}{" "}</span>
        );
      }
    }
  
    setInputTranslated(translatedText);
  };

  return (
    <div className="app-container">
    <div className="header">
      <h3>NATO Alphabet Translator</h3>
      <div className="input-text">
      <input
        type="text"
        placeholder="Enter characters"
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={handleOutputText}>Translate</button>
      </div>
      </div>
      <p className="output-text">{inputTranslated}</p>
      </div>
  );
}

export default App;
