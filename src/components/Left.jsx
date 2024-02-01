import React, { useEffect, useState } from 'react';
import './sidebar.css'
import Item from './Item';

const Left = ({values,dispatch}) => {
 
  const [inputFieldValue, setInputFieldValue] = useState('');


  const [textItem,setTextItem]=useState("")
  const [checked,setChecked]=useState(false)




  // let arr=["abc","def","ghi","klh"]

  const [arr,setArr]=useState([])
  const [t,setT]=useState("")
  

  useEffect(()=>{
    // deleteHandler(false)
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

    // setText("")
    dispatch({
      type: "setText",
      text:""
    })
    
    // const newList = arr.concat(inputFieldValue);
    // setArr(newList);



    const ne=values.tmp2?.concat(inputFieldValue)
    // alert(ne)
    // setTmp2(ne)
    dispatch({
      type:'setTmp2',
      tmp2:ne
    })
    setInputFieldValue("");
  };



 


  const handleInputFieldChange = (event) => {
    // alert(text)
    // setText("")
    dispatch({
      type:"setText",
      text:""
    })
      setInputFieldValue(event.target.value);
      // textHandler(event.target.value)
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
        {/* {alert(values.tmp2)} */}

        {

          // alert(values.tmp2)
          values.tmp2?.map((txt,idx)=>{



            return (
            // console.log(text)
            // alert()
            <Item enabled={(values.tmp2.indexOf(values.text)===idx)?true:false}  checkedtext={txt} key={idx} dispatch={dispatch} fun4={setChecked} values={values}  setT={setT} />
            )
          })





        }


      

        {/* <Item text={"abcde"}/> */}


        
        {/* {!click&&inputFieldValue} */}
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