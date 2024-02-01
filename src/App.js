
import './App.css';

import SidebarLeft  from './components/SidebarLeft';
import SidebarRight  from './components/SidebarRight';
import { useState ,useReducer} from 'react';




let initialstate={
  text:"",
  text2:"",
  click:false,
  checked2:false,
  right:false,
  left:false,
  erase:false,
  tmp2:[],
  tmp:[],
  clickdelete:false



}

const reducer=(state,action)=>{
  switch(action.type){

    case "setText":
        return {...state,text:action.text}
    case "setText2":
      return{...state,
        // click:(state.click)?true:false,
        text2:action.text2}
    
    case "setClick":
      return {...state,click:action.click}
    
    case "setChecked2":
      return {...state,checked2:action.checked2}  
    
    case "setRight":
      // console.log("hell");
      // alert(action.right)
      // console.log(action.right);
      return {...state,right:action.right}
    
      
    case "setLeft":
      return {...state,left:action.left}
    
    case "setErase":
      return {...state,erase:action.erase}
    
      
    case "setClickdelete":
      return {...state,clickdelete:action.clickdelete}
    
      
    case "setTmp":
      return {...state,tmp:action.tmp}
    
      
      case "setTmp2":
        // alert(action.tmp2)
        // console.log(action.tmp2);
        return {...state,tmp2:action.tmp2}

    
      
   


  }
}





function App() {

  const [values,dispatch]=useReducer(reducer,initialstate)
  // const[text,setText]=useState("")
  // const [text2,setText2]=useState("")
  // const [click,setClick]=useState(false)
  //  const [checked2,setChecked2]=useState(false)
  //  const [right,setRight]=useState(false)
  //  const [left,setLeft]=useState(false)
  //  const [erase,setErase]=useState(false)
  
  // const [tmp2,setTmp2]=useState([])
  // const [tmp,setTmp]=useState([])
  // const [clickdelete,setClickdelete]=useState(false)
  const handleRight=()=>{
    // setClick(true)
    dispatch({
      type:"setClick",
      click:true
    })
    const filtered=values.tmp2.filter((ele)=>{
      return ele!=values.text
    })

    // setText("")
    dispatch({
      type:"setText",
      text:""
    })
    // setText2("")
       dispatch({
      type:"setText2",
      text2:""
    })


    // setTmp2(filtered)
    dispatch({
      type:"setTmp2",
      tmp2:filtered
    })

    // setRight(false)
    dispatch({
      type:"setRight",
      right:false
    })


   
   const newList=values.tmp?.concat(values.text)
    // setTmp(newList)
    // setChecked2(false)
    // setErase(false)
    dispatch({
      type:"setTmp",
      tmp:newList
    })
    dispatch({
      type:"setChecked2",
      checked2:false
    })
    dispatch({
      type:"setErase",
      erase:false
    })

    
}

const handleDelete=()=>{
    const left=values.tmp2?.filter((ele)=>{
      return ele!==values.text
    })

      const right=values.tmp?.filter((ele)=>{
      return ele!==values.text2
    })


    // console.log(filtered2,filtered);


          //     setTmp2(filtered)
          //     setTmp(filtered2)
          // setClickdelete(true)
          // setErase(false)
          // setRight(false)
          // setLeft(false)
          // setText("")
          // setText2('')
dispatch({
      type:"setTmp2",
      tmp2:left
    })
    dispatch({
      type:"setTmp",
      tmp:right
    })
    alert(values.tmp)
    dispatch({
      type:"setClickdelete",
      clickdelete:true
    })
    dispatch({
      type:"setErase",
      erase:false
    })
    // alert(values.right)
    dispatch({
      type:"setRight",
      right:false
    })
    dispatch({
      type:"setLeft",
      click:false
    })
    dispatch({
      type:"setText",
      text:""
    })
    dispatch({
      type:"setText2",
      text2:""
    })
     console.log(left,right);

    console.log(values.tmp,values.tmp2);


    // setTimeout(()=>{
    //   console.log(values.tmp2,values.tmp);

    // },5000)


     
}



const leftHanlder=()=>{
  const newT=values.tmp2?.concat(values.text2)
  // alert(newT)
  // setTmp2(newT)
  dispatch({
      type:"setTmp2",
      tmp2:newT
    })
    // alert(values.tmp2)
    


  




    const filtered=values.tmp?.filter((ele)=>  {return ele!=values.text2}
      
    )

   
    // console.log(filtered,tmp);
    // console.log(text2);
    // // alert(text)
    // setText2('')
    dispatch({
      type:"setTmp",
      tmp:filtered
    })

    //  setText2("")


    // setTmp(filtered)
    dispatch({
      type:"setText2",
      text2:""
    })
    dispatch({
      type:"setText",
      text:""
    })
    // console.log(tmp)
    // setLeft(false)
    dispatch({
      type:"setLeft",
      left:false
    })
    // setErase(false)
    dispatch({
      type:"setErase",
      erase:false
    })


//  alert(values.click)

// setClick(!click)
dispatch({
      type:"setClick",
      click:(values.click===true)?false:true
    })
   
}











  return (
    <div className="App">
      <SidebarLeft
      values={values}
      
      // click={values.click} text={values.text}  clickdelete={values.clickdelete}   tmp2={values.tmp2}  checked2={values.checked2}
       
       dispatch={dispatch}
      //  setRight={values.setRight} setLeft={values.setLeft} setErase={values.setErase} setText={values.setText} setChecked2={values.setChecked2} setTmp2={values.setTmp2} deleteHandler={setClickdelete} textHandler={setText}
       />
      
      <div className='inner'>
        <button disabled={!(values.right)} onClick={handleRight}>Move Right</button>
        
        <button disabled={!(values.left)} onClick={leftHanlder}>Move Left</button>
        <button  disabled={!(values.erase)} onClick={handleDelete}> Delete</button>
      </div>
      <SidebarRight 
      values={values}
      // text={tmp} clickdelete={clickdelete} setText2={setText2}
      dispatch={dispatch}
      // textHandler={setText}  setRight={setRight} setLeft={setLeft} setErase={setErase}
      />

      {/* <button onClick={()=>dispatch({
        type:"setTmp2",
        tmp2:[1,2,3]
      })}>Click</button>


      <div>
        {values.tmp2}
      </div> */}
     
      
    </div>
  );
}

export default App;
