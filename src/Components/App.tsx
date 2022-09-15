import React from 'react';
import FetchCards from './FetchCards';
import SetSelect from './SetSelect';
import ClassSelect from './ClassSelect';
import { useState } from 'react';

function App() {
  const [setName, setSetName] = useState("");
  const [playerClassName,setPlayerClassName] = useState("")

  return (
    <>
    <div className="select-container">
    <SetSelect setName={setName} setSetName={setSetName} setPlayerClassName={setPlayerClassName}/>
    <ClassSelect playerClassName={playerClassName} setPlayerClassName={setPlayerClassName}/>
    </div>
    {setName !== "" && <FetchCards setName={setName} playerClassName={playerClassName}/>}
    </>
    
  );
}

export default App;
