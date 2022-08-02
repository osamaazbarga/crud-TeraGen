import React, { useState,useEffect } from 'react';
import { Route } from 'react-router';
import { BrowserRouter , Routes} from 'react-router-dom';
import './app.css';
import ReactImage from './react.png';

import PopUP from './components/PopUp/PopUP';


function App() {
  const [buttonPopUp,setButtonPopUp]=useState(false)
  const [timeToPopUp,setTimeToPopUp]=useState(false)



  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setTimeToPopUp(true)
  //   },1000)
  // })


  return(
    <div className='App'>
      {/* <main>
        <h1>crud</h1>
        <br/>
        <button onClick={()=>setButtonPopUp(true)}>Open</button> */}
        {/* <button onClick={window.close()}>Open</button> */}

        <PopUP/>


        {/* <PopUP trigger={timeToPopUp} setTrigger={setTimeToPopUp}>
          <h3>My Popup timer</h3>
        </PopUP> */}
      {/* </main> */}
    </div>
  )
  // state = { username: null };

  // componentDidMount() {
  //   fetch('/api/getUsername')
  //     .then(res => res.json())
  //     .then(user => this.setState({ username: user.username }));
  // }

  // render() {
  //   const { username } = this.state;
  //   return (
  //     <div>
  //       {username ? <h1>{`Hello ${username}`}</h1> : <h1>111.. please wait!</h1>}
  //       <img src={ReactImage} alt="react" />
  //     </div>
  //   );
  // }

}
export default App;