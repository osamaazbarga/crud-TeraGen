import React,{useState,useEffect} from 'react'
import './RightSide.css'
import { CloseOutlined,QuestionCircleOutlined,RightOutlined,FileOutlined,PlusSquareOutlined } from '@ant-design/icons';
import {getBubbles,removeBubbles} from '../../../function/bubble'

const RightSide = () => {
  const [bubble,setBubble]=useState()
  const [bubbleCount,setBubbleCount]=useState(0)
    useEffect(()=>{
        loadBubbles()
        getBubblesCount()
    },[])

    const loadBubbles=()=>{
        getBubbles()
        
        .then((res)=>{
            console.log(res.data);
            setBubble(res.data)
            getBubblesCount()
            //load related
        })
    }

    const getBubblesCount=()=>{
      getBubbles()
        .then((res)=>{
            setBubbleCount(res.data.length)
            
            //load related
        })
    }

    const handleRemoveAll=()=>{
      removeBubbles()
            .then(res=>{
                loadBubbles()
                getBubblesCount()
                window.location.reload(false);
            })
            // .catch((err)=>{
                
            //     if(err.response.status===400) {
                    
            //         toast.error(err.response.data)
            //     }
            // })
    }
  return (
    <div className='container-right'>
      <h3><span>{bubbleCount}</span> app reviews</h3>
      <p>
        Write the texts our accounts will use when reviewing your app on the App Store (Minimum 50 reviews).
      </p>
      
      <button className='btn-right'><QuestionCircleOutlined style={{  }} /> <a href='https://www.linkedin.com/in/osama-azbarga-367946127/'>Learn how to add reviews</a> <RightOutlined /></button>
      <button className='btn-right'><FileOutlined style={{  }} /> Import from file <RightOutlined /></button>
      <button className='btn-right'><PlusSquareOutlined /> +10 generic reviews <RightOutlined /></button>
      <button className='btn-clear' onClick={()=>handleRemoveAll()}><CloseOutlined  /> Clear all reviews </button>

      <button className='btn-save'>Save</button>
    </div>
  )
}

export default RightSide