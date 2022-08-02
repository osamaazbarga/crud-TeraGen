import React, { useEffect, useState } from 'react'
import './LeftSide.css'
import {createBubble,getBubbles} from '../../../function/bubble'
const LeftSide = () => {
    const [charCount,setCharCount]=useState(0);
    const [value,setValue]=useState({title:'',text:''});
    const [bubble,setBubble]=useState()
    useEffect(()=>{
        loadBubbles()
    },[])

    const loadBubbles=()=>{
        getBubbles()
        .then((res)=>{
            console.log(res.data);
            setBubble(res.data)
            //load related
        })
    }

    const handleChange=(e)=>{
        setValue({...value,[e.target.name]:e.target.value})
        console.log(e.target.name,'-------',e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(value);
        
        createBubble({value})
        .then(res=>{
            console.log('res',res);
            // window.alert(`"${res.data.title}" is created`)
            window.alert(`"${{value}}" is created`)
            // window.location.reload()
        })
        .catch(err=>{
            console.log(err);
            // if(err.response.status===400) {
                    
            //     toast.error(err.response.data)
            // }
            toast.error(err.response.data.err)
        })
    }




    return (
        <div className='container-left'>
            <div className='add-box'>
                <div className='title'>
                    <input placeholder="Enter review title" onChange={(e)=>{setCharCount(e.target.value.length);handleChange(e)}} maxLength="255" name="title" id="input-title"  className='title-input'/>
                    <div>{charCount}/255</div>
                </div>
                <hr/>

                <div className='text'>
                    <input name="text" id="input-text" onChange={(e)=>{handleChange(e)}}  className='text-input' placeholder="Write your review text"/>
                    {charCount>0?<button onClick={(e)=>handleSubmit(e)} className='add-btn'>Add</button>:
                    <button onClick={(e)=>handleSubmit(e)} className='close-add-btn'>Add</button>}

                </div>
            </div>

            <div className='list-Box'>
                {
                    bubble&&bubble.length<0?
                    <div>No reviews added yet.<br/> Learn how to add reviews</div>:
                    bubble&&bubble.map((bub,i)=>{
                        if(i<5)
                        return <div className='box-item'>
                            <button className='delete-tag'>X</button>
                             <div className='bub-title'>{bub.title}</div>
                             <div className='bub-text'>{bub.text}</div>
                         </div>
                
                     })
                     
                }
                {/* {
                    bubble&&bubble.map((bub)=>{
                       return <div className='box-item'>
                            <div className='bub-title'>{bub.title}</div>
                            <div className='bub-text'>{bub.text}</div>
                        </div>
                    })
                } */}
                
            </div>

            
        </div>
    )
}

export default LeftSide