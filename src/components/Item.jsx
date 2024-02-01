import React, { useState } from 'react'

import "./sidebar.css"

const Item = (

  {enabled,idx,setT,dispatch,values,checkedtext,fun4}
  // {setText,enabled,checkedtext,idx,fun3,fun4,setChecked2,checked2,setT,setRight,setLeft,setErase}
  
  ) => {
 


    const handler=(e)=>{
      // alert(values.right)
      dispatch({
        type:"setRight",
        right:true
      })
      //  alert(values.right)



        // setRight(true)
        // setLeft(false)
        // setErase(true)
        // dispatch({
        //   type:"setRight",
        //   value:true

        // })
         dispatch({
          type:"setLeft",
          left:false

        })
         dispatch({
          type:"setErase",
          erase:true

        })





        // fun3(e.target.value)
         dispatch({
          type:"setText",
          text:e.target.value
        })


        


        





        fun4(true)


        
        setT(e.target.value)


        // setText(e.target.value)
        // setChecked2(true)

        dispatch({
          type:"setText",
          text:e.target.value
        })
         dispatch({
          type:"setChecked2",
          checked2:true
        })


    }
  return (
    <div className='item'>
        <input checked={enabled} type="checkbox" value={checkedtext} className='input-checkbox' onChange={handler}/>

        
        
        {checkedtext}
        
        
        
        </div>


  )
}

export default Item