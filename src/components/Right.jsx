import React, { useEffect, useState } from 'react';
import './sidebar.css'

import Item from './Item';
import ItemRight from './ItemRight';

const Right = (
  {values,dispatch}

  // {text,clickdelete,textHandler,setText2,setRight,setLeft,setErase}
  ) => {


    const [arr,setArr]=useState(["abc","def","ghi"])
    const [t2,setT2]=useState("")


  


        useEffect(()=>{
            // const prev=arr.concat(text)
            // setArr(prev)
        


            if(values.clickdelete===true){
                // textHandler("")  
                dispatch({
                  type:"setText",
                  text:""
                })  
            }

        },[values.clickdelete])


 

  return (
    <div className='cont'>
      <div style={{marginTop:"100px"}}>
        <label htmlFor="text-field">Upper Section:</label>
      <div>

        {/* {console.log(values.tmp)} */}
        {/* {alert(values.text)} */}

        {
            values.tmp?.map((val,idx)=>{
                
                  return ( <ItemRight enabled={(values.tmp.indexOf(values.text2)===idx)?true:false} key={idx} text={val} 
                    dispatch={dispatch} setT2={setT2} value={values}
                  // setText2={setText2} setRight={setRight} setLeft={setLeft} setErase={setErase} setT2={setT2}
                  
                  />)
                
            })
        }

           {/* {
          text.map((txt,idx)=>{

            return (
            // console.log(text)
            <Item text={txt} key={idx} />
            )
          })
        } */}
        {/* {text} */}
      </div>
      </div>
      <div style={{marginTop:"500px"}}>
       
      </div>
    </div>
  );
};

export default Right;