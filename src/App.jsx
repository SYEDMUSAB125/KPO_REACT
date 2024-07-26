import { useState,useEffect, useMemo } from 'react'
import Counter from './Counter'


function App() {
 const [data , setData ] = useState(null);
 const [pass , setPass ] = useState(null);
 const [check , setCheck ] = useState(null);
 const [flag , setFlag] = useState(false)
function getData(e){
// console.log(e.target.value)
setData(e.target.value)
setFlag(false)
}
function handleClick(){
setFlag(true)
}
const HandleForm = (e)=>{
e.preventDefault()
}
const HandleSubmit = ()=>{
  console.log(data,pass,check);
}
  return (
    <>
    {/* <h1>hello from app</h1>
    <h1> { flag ? <h1> this is if body </h1> : <h1 >this is else body</h1> } </h1>
    <input type="text" onChange={getData}  />
    <button onClick={handleClick} >  submit </button> */}
 {/* <form onSubmit={(e)=> HandleForm(e) } > */}

 <form onSubmit={HandleForm} >
  Name:
  <input type="text" onChange={(e)=>setData(e.target.value)} /> <br />
  Password:
  <input type="password" onChange={(e)=>setPass(e.target.value)} /> <br />
  
  <input type="checkbox" onChange={(e)=>setCheck(e.target.checked)}  /> Term and condition
  <br />
  <button onClick={HandleSubmit} >Submit</button>
 </form>



    </>
  )
}

export default App
