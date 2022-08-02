import React from 'react'
import LeftSide from './LeftSide/LeftSide';
import './PopUp.css'
import RightSide from './RightSide/RightSide';
const PopUP = (props) => {
//   return (props.trigger)?(
//     <div className='popup'>
//         <div className='popup-inner'>
//             <button className='close-popup' onClick={()=>props.setTrigger(false)}>X</button>
//             <div className='inside-popup'>
//                 <LeftSide/>
//                 <RightSide/>
//             </div>
//         </div>
//     </div>
//   ):"";

return (
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-popup'onClick={()=>window.close()}>X</button>
            <div className='inside-popup'>
                <LeftSide/>
                <RightSide/>
            </div>
        </div>
    </div>
  );
}

export default PopUP