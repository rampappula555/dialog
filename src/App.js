import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import GetStartedOverlay from './components/getStartedOverlay';

function App() {
  const [open,setOpen]=useState(false)

  return (
    <div className="App">
    <button onClick={()=>{setOpen(true)}}>get Started</button>
    <GetStartedOverlay open={open} onClose={()=>{setOpen(false)}}/>
    </div>
  );
}

export default App;
