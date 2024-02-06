import React, { useEffect, useState } from 'react';
import './sidebar.css'

import Item from './Item';
import ItemRight from './ItemRight';
import { AppContext } from '../App';

export const RightItemContext=React.createContext()

const Right = (
  
  ) => {


    const {values,dispatch}=React.useContext(AppContext)
    


    
    const [t2,setT2]=useState("")


  


        useEffect(()=>{
           


            if(values.clickdelete===true){
                 
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

       
        {
            values.tmp?.map((val,idx)=>{
              const enabled=(values.tmp.indexOf(values.text2)===idx)?true:false
                
                  return ( 
                    <RightItemContext.Provider value={{enabled,idx,val,dispatch,setT2,values}}>
                  
                  
                  <ItemRight/>
                  </RightItemContext.Provider>
                  
                  )
                
            })
        }

          
      </div>
      </div>
      <div style={{marginTop:"500px"}}>
       
      </div>
    </div>
  );
};

export default React.memo(Right);