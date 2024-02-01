import React from 'react'
import Button from 'react-bootstrap/Button';
import './sidebar.css'
import Left from './Left';
import { useState } from 'react';

const Sidebar = ({values,dispatch}) => {

    

  return (
    <div  className="container" >
        <Left 

        values={values}
        dispatch={dispatch}

        // setText={setText} textHandler={textHandler} deleteHandler={deleteHandler} setTmp2={setTmp2} setChecked2={setChecked2} setRight={setRight} setLeft={setLeft} setErase={setErase}
//  checked2={checked2} 
 
 
 />




    </div>
  )
}

export default Sidebar