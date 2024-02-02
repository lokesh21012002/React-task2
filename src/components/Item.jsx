import React, { useState } from 'react'
import { ItemContext } from './Left'

import "./sidebar.css"

const Item = (

  
  
  ) => {


    const {values,dispatch,enabled,txt,idx,setChecked,setT}=React.useContext(ItemContext)
 


    const handler=(e)=>{
      
      dispatch({
        type:"setRight",
        right:true
      })
   



        
         dispatch({
          type:"setLeft",
          left:false

        })
         dispatch({
          type:"setErase",
          erase:true

        })





       
         dispatch({
          type:"setText",
          text:e.target.value
        })


        


        





        
        setChecked(true)


        
        setT(e.target.value)


       

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
        <input checked={enabled} type="checkbox" value={txt} className='input-checkbox' onChange={handler}/>

        
        
        {txt}
        
        
        
        </div>


  )
}

export default Item