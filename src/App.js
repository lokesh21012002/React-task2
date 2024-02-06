
import './App.css';

import SidebarLeft  from './components/SidebarLeft';
import SidebarRight  from './components/SidebarRight';
import React,{ useState ,useReducer} from 'react';




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
        
        text2:action.text2}
    
    case "setClick":
      return {...state,click:action.click}
    
    case "setChecked2":
      return {...state,checked2:action.checked2}  
    
    case "setRight":
      
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
        
        return {...state,tmp2:action.tmp2}

    
      
   


  }
}




 export  const AppContext= React.createContext({});





function App() {

  const [values,dispatch]=useReducer(reducer,initialstate)


  
  const handleRight=()=>{
    
    dispatch({
      type:"setClick",
      click:true
    })
    const filtered=values.tmp2.filter((ele)=>{
      return ele!=values.text
    })

    
    dispatch({
      type:"setText",
      text:""
    })
    
       dispatch({
      type:"setText2",
      text2:""
    })


    
    dispatch({
      type:"setTmp2",
      tmp2:filtered
    })

   
    dispatch({
      type:"setRight",
      right:false
    })


   
   const newList=values.tmp?.concat(values.text)
   
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


   


     
}



const leftHanlder=()=>{
  const newT=values.tmp2?.concat(values.text2)
  
  dispatch({
      type:"setTmp2",
      tmp2:newT
    })
  
    


  




    const filtered=values.tmp?.filter((ele)=>  {return ele!=values.text2}
      
    )

   
    
    dispatch({
      type:"setTmp",
      tmp:filtered
    })

   
    dispatch({
      type:"setText2",
      text2:""
    })
    dispatch({
      type:"setText",
      text:""
    })
   
    dispatch({
      type:"setLeft",
      left:false
    })
    
    dispatch({
      type:"setErase",
      erase:false
    })



dispatch({
      type:"setClick",
      click:(values.click===true)?false:true
    })
   
}











  return (
    <div className="App">
      <AppContext.Provider value={{values ,dispatch}}>
      <SidebarLeft/>
      
      <div className='inner'>
        <button disabled={!(values.right)} onClick={handleRight}>Move Right</button>
        
        <button disabled={!(values.left)} onClick={leftHanlder}>Move Left</button>
        <button  disabled={!(values.erase)} onClick={handleDelete}> Delete</button>
      </div>
      <SidebarRight/>

     </AppContext.Provider>
      
    </div>
  );
}

export default React.memo(App);
