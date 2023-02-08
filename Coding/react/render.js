import "./styles.css";
import { useState, useEffect } from "react";

//ToDo: Create input and rendred to the screen current entered value
//and prevous entered value (e.x.)Entered: 'Mikita', Previos: 'Mikit'
let repaint = 0;

export default function App() {
  const [input, setInput] = useState("");
  const [prewInput, setPrewInput] = useState("");
  const [count, setCount] = useState(0);

  const handleChangeInput = (event) => {
    setInput((prew) => {
      setPrewInput(prew);

      return event.target.value;
    });
  };

  useEffect(() => {
    repaint = repaint + 1;
  }, [input, prewInput]);

  // useEffect(() => {
  //   console.log('1');

  //   const interval = setInterval(() => {
  //     setCount((prev) => (prev += 1));
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //     console.log('2');
  //   }
  // }, [count]);

  return (
    <div className="App">
      <input value={input} onChange={handleChangeInput} />
      <div>input: {input}</div>
      <div>prewInput: {prewInput}</div>
      <div>repaint: {repaint}</div>
      <div>count: {count}</div>
      {/* <div>This component was rendered INT times</div> */}
    </div>
  );
}
