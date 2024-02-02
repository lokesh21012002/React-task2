import React, { useState } from 'react'

import { RightItemContext } from './Right'

import "./sidebar.css"

const ItemRight = (
  
  ) => {
    const [checked4,setChecked]=useState(false)
    const {enabled,idx,val,dispatch,setT2,values}=React.useContext(RightItemContext)


    const handler=(e)=>{
        
        dispatch({
          type:"setText2",
          text2:e.target.value
        })
        setT2(e.target.value)

       
         dispatch({
          type:"setRight",
          right:false

        })
        dispatch({
          type:"setLeft",
          left:true

        })
         dispatch({
          type:"setErase",
          erase:true

        })


        
        setChecked(true)

       

    }
  return (
    <div className='item'>
     
        <input checked={enabled} type="checkbox" value={val} className='input-checkbox' onClick={handler}/>

        
        
        {val}
        
        
        
        </div>


  )
}

export default ItemRight