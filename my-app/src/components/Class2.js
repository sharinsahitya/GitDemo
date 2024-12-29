import React, { Component } from 'react'
import axios from 'axios' ;

export default class Class2 extends Component {
    constructor(){
        super();
        //console.log(React);
        this.x1 = React.createRef();
        this.x2 = React.createRef();
        this.x3 = React.createRef();
    }
    myfunc(){
        //fetching ur data
        //alert(); 
        var id = this.x1.current.value;
        console.log(id);
        var dname=this.x2.current.value;
        var dloc=this.x2.current.value;
      //  axios is a third party lib requires 2 params ==>url+data pass ur obj directly no data conversion
        axios.post(
            "http://localhost:5224/api/home/dept/add" ,
            {id: id,deptName: dname,loc: dloc}
        ).then(res=>{
            console.log(res);
        });
            }
  render() {
    return (
      <div className='container'>
      <h1> Add Record - Ref Variable</h1>

      Department Id:<input ref={this.x1} /> <br />
      Department Name:<input ref={this.x2} /> <br />
      Department Loaction<input ref={this.x3} /> <br />
      <button onClick={()=>{ this.myfunc() }}>Add Record </button>
      </div>
    )
  }
}
