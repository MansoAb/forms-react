import { useState } from "react";
import "./index.css";

const App = (props) => {
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
    setBl(e.target.value.length < 1 ? true : null);
  };
  const [bl, setBl] = useState(true);

  const handleM = () => {
    if (text.length > 0) {
      console.log(text);
      setText("");
      setBl(false);
    }
  };

  return (
    <div>
      {" "}
      <div className={`block ${!bl ? "green" : null}`}>
        <div className="block1">
          <input
            className={`inputText ${bl ? "is-error" : null}`}
            value={text}
            onChange={handleText}
          ></input>
          <input
            type="button"
            className={`button ${text.length < 1 ? "deactiv" : null}`}
            value="Отправить"
            onClick={handleM}
          />
        </div>
        <div>
          {bl
            ? "Поле ввода не должно быть пустым."
            : bl === false
            ? "Сообшение отправлено"
            : null}
        </div>
      </div>
    </div>
  );
};

export default App;
