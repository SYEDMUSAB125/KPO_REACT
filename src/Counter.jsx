import React, { useEffect } from 'react';

function Counter({count , data}) {
    useEffect(() => {
        console.log("useEffect")
      },[count])
      useEffect(() => {
        console.log("useEffect data ")
      },[data])
  return (
    <div>
      <h1>{count}</h1>
      <h1>{data}</h1>
    </div>
  );
}

export default Counter;
