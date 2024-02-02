import React, { useEffect, useState } from 'react';
import './sidebar.css'
import Item from './Item';
import { AppContext } from '../App';

  export const ItemContext=React.createContext()

const Left = (
  
  ) => {
    



  const {values,dispatch}=React.useContext(AppContext)
 
  const [inputFieldValue, setInputFieldValue] = useState('');


 
  const [checked,setChecked]=useState(false)




 


  const [t,setT]=useState("")
  

  useEffect(()=>{
    
    dispatch({
      type:"setClickdelete",
      clickdelete:false
    })
    setInputFieldValue("")

  },[values.clickdelete])


  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  const handleAdd = () => {

    
    dispatch({
      type: "setText",
      text:""
    })
    




    const ne=values.tmp2?.concat(inputFieldValue)
    
    dispatch({
      type:'setTmp2',
      tmp2:ne
    })
    setInputFieldValue("");
  };



 


  const handleInputFieldChange = (event) => {
    
    dispatch({
      type:"setText",
      text:""
    })
      setInputFieldValue(event.target.value);
      
       dispatch({
      type:"setText",
      text:event.target.value
    })

   
  };



  return (
    <div className='cont'>
      <div style={{marginTop:"100px"}}>
        <label htmlFor="text-field">Upper Section:</label>
      <div>
       

        {

       
          values.tmp2?.map((txt,idx)=>{
            const enabled=(values.tmp2.indexOf(values.text)===idx)?true:false



            return (
   

            <ItemContext.Provider value={{values,dispatch,enabled,txt,idx,setChecked,setT}}>
            <Item/>
            </ItemContext.Provider>
            )
          })





        }


      

        
      </div>
      </div>
      <div style={{marginTop:"30rem" ,left:"0px"}}>
        
        <input

          type="text"
          id="input-field"
          value={inputFieldValue}
          className='input'
          onChange={handleInputFieldChange} style={{marginTop:'20px'}}
          placeholder='Type Here'
          onAdd={handleAdd}
          onKeyDown={handleKeyDown}
          
        />
      </div>
    </div>
  );
};

export default Left;