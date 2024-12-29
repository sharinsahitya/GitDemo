import React, { useState } from 'react'

export default function Register() {
   // data from api store in componenet-->require state variable ,it is updated by a second paramete which is acting as a state var
   var [count,setCount]=useState(100);
   function myFunc(){
    setCount(count+10);
   }
  return (
    <div><h1>State Variable</h1>
    <br/>
    {count}
    <button onClick={myFunc}>Change</button>
    </div>
  )
}
