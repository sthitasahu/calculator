import { useState,useEffect} from 'react'
import './App.css'

function App() {
  const [current,setcurrent] = useState('')
  function display(char)
  {
    setcurrent(current+char)
  }
  function calculate()
  {
    const answer=eval(current)
    setcurrent(answer.toString())
  }
  function clear(){
    setcurrent("")
  }
  
  
  function backspace()
  {
    if(current.length>0){
      setcurrent(current.slice(0,-1));
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Backspace") {
      // Prevent default backspace behavior
        backspace();
      }
      // Optionally handle other keys here (e.g., Enter for calculate)
      if (event.key === "Enter") {
        calculate();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [current]);

  
  
  return (
    <>
     <form className="calculator" name="calc">
      <input type="text" className="value" value={current} readOnly></input>
      <span className="num clear" onClick={() => clear()}>
        c
      </span>
      <span onClick={()=>display("(")}>(</span>
      <span onClick={()=>display(")")}>)</span>
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={()=>display("+")}>+</span>
      <span onClick={()=>display("-")}>-</span>
      <span onClick={()=>display("**")}> ** </span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span className="num equal" onClick={() => calculate()}>
        =
      </span>
      < span onClick={()=>backspace()}>Back</span>
    </form>
    </>
  )
}

export default App
