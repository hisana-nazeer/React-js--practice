import React, { useState } from "react";
import './styles.css'
function ChipsInput() {
  const [value, setValue] = useState("")
  const [chips, setChips] = useState([])
  function handleChange(e) {
    setValue(e.target.value)
  }
  function handleKeyDown(e) {
    
    if (e.key === "Enter") {
      e.preventDefault()
      if (value.trim() !== "") {


        setChips([...chips, value.trim()])
      }
      setValue("")
    }
       
  }
  function handleDelete(chipToDelete) {
    setChips(chips.filter(chip=>chip!==chipToDelete))
}
 

  return (
    <div className='main-container'>
      <h2>Chips Input</h2>
      <div className="input-box">
      <input
        type="text" 
        placeholder="Type a chip and press enter"
          className="input"
          value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        />
        <div className="chips-container">
          {chips.map((chip, index) => (
          <div key={index} className="chip">
         <h1> {chip} </h1>
          <button className="delete-button" onClick={handleDelete(chip)}>x</button>

            </div>
          ))}
        </div>
      </div>
    


    </div>
    
  );
}

export default ChipsInput;
          
  
