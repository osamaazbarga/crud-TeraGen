import React from 'react'
import './RightSide.css'
import { CloseOutlined,QuestionCircleOutlined,RightOutlined,FileOutlined,PlusSquareOutlined } from '@ant-design/icons';


const RightSide = () => {
  return (
    <div className='container-right'>
      <h3><span>499</span> app reviews</h3>
      <p>
        Write the texts our accounts will use when reviewing your app on the App Store (Minimum 50 reviews).
      </p>
      
      <button className='btn-right'><QuestionCircleOutlined style={{  }} /> Learn how to add reviews <RightOutlined /></button>
      <button className='btn-right'><FileOutlined style={{  }} /> Import from file <RightOutlined /></button>
      <button className='btn-right'><PlusSquareOutlined /> +10 generic reviews <RightOutlined /></button>
      <button className='btn-clear'><CloseOutlined  /> Clear all reviews </button>

      <button className='btn-save'>Save</button>
    </div>
  )
}

export default RightSide