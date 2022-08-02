import React, { useState,useEffect } from 'react';

import './app.css';

import PopUP from './components/PopUp/PopUP';


function App() {
  const [buttonPopUp,setButtonPopUp]=useState(false)
  const [timeToPopUp,setTimeToPopUp]=useState(false)



  useEffect(()=>{
    setTimeout(()=>{
      setTimeToPopUp(true)
    },10000)
  })


  return(
    <div className='App'>
      <main>
        <h1>crud: By Osama Azbarga</h1>
        <br/>
        <button className='btn' onClick={()=>setButtonPopUp(true)}>Open</button>
        <PopUP trigger={buttonPopUp} setTrigger={setButtonPopUp}>
          <h3>My Popup</h3>
        </PopUP>

        {/* <PopUP trigger={timeToPopUp} setTrigger={setTimeToPopUp}>
          <h3>My Popup timer</h3>
        </PopUP> */}
      </main>
    </div>
  )

}
export default App;