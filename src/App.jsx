import { useState,useEffect, useMemo } from 'react'
import Counter from './Counter'


function App() {
 const [data , setData ] = useState(null);
 const [flag , setFlag] = useState(false)
function getData(e){
// console.log(e.target.value)
setData(e.target.value)
setFlag(false)
}
function handleClick(){
setFlag(true)
}
  return (
    <>
    {/* <h1>hello from app</h1>
    <h1> { flag ? <h1> this is if body </h1> : <h1 >this is else body</h1> } </h1>
    <input type="text" onChange={getData}  />
    <button onClick={handleClick} >  submit </button> */}
 <form action="">
  <input type="text" name="" id="" />
 </form>



    </>
  )
}

export default App
