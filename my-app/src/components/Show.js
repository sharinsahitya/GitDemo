import React, { useEffect, useState } from 'react'

export default function Show() {

    var[data,setdata] = useState([]);

    
    useEffect(()=>{
        //console.log('component loaded');
        fetch('http://localhost:5224/api/home/dept')
        .then(res=>res.json())
        .then(val=>{
            console.log(val);
            setdata(val);
        })
    },[])
    return (
    <div className='container'>
    <h1>Show Data From API</h1> 
    <table className='table'>
        <tr>
            <th>Department No</th>
            <th>Department Name</th>
            <th>Department Location</th>
        </tr>
        {
            data.map((number) =>
                <tr>
                    <td>{number.id}</td>
                    <td>{number.deptName}</td>
                    <td>{number.loc}</td>
                </tr>
            )
        }
    </table>

    </div>
  )
}
