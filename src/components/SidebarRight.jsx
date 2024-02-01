import React from 'react'
import Button from 'react-bootstrap/Button';
import './sidebar.css'
import Right from './Right';
import { useState } from 'react';

const SidebarRight = (
  // {text,clickdelete,textHandler,setText2,setRight,setLeft,setErase}
  {values,dispatch}
  ) => {

    

  return (
    <div  className="container" >


        <Right 
        values={values}
        dispatch={dispatch}
        // text={text} clickdelete={clickdelete} 
        // textHandler={textHandler} setText2={setText2} setRight={setRight} setLeft={setLeft} setErase={setErase}
        
        />




    </div>
  )
}

export default SidebarRight