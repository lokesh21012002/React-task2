import React, { useState } from 'react'

import "./sidebar.css"

const ItemRight = (
  {enabled,key,text,dispatch,setT2,values}
  // {enabled,text,idx,setText2,setRight,setLeft,setErase,setT2}
  ) => {
    const [checked4,setChecked]=useState(false)


    const handler=(e)=>{
        // setText2(e.target.value)
        dispatch({
          type:"setText2",
          text2:e.target.value
        })
        setT2(e.target.value)

        // setRight(false)
        // setLeft(true)
        // setErase(true)
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


        // fun3(e.target.value)
        // fun4(true)
        // alert(e.target.value)
        setChecked(true)

        // console.log(e.target.value);

    }
  return (
    <div className='item'>
      {/* {alert(enabled)} */}
        <input checked={enabled} type="checkbox" value={text} className='input-checkbox' onClick={handler}/>

        
        
        {text}
        
        
        
        </div>


  )
}

export default ItemRight