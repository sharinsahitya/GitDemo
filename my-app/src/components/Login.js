import React, { useRef } from 'react';

export default function Login() {
    var x1=useRef();
    var x2=useRef();
    var x3=useRef();

    function loginfun(){
        var deptno = x1.current.value;
        var deptname = x2.current.value;
        var loc = x3.current.value;
        console.log(deptno);
        console.log(deptname);
        console.log(loc);

        fetch('http://localhost:5224/api/home/dept/add',{
            method:'POST',
            body:JSON.stringify(
                {
                    deptno:deptno,
                    dname:deptname,
                    loc:loc
                }
            ),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>{
            console.log(res);
            
        })
    }
  return (
    <div className='container'>
      <h1>Login form</h1>
      <input type='text' ref={x1} placeholder='Enter ID'/><br/>
      <input type='text' ref={x2} placeholder='Enter Department name'/><br/>
      <input type='text' ref={x3} placeholder='Enter location'/><br/>
      <button onClick={loginfun}>Submit</button>
    </div>
  )
}
