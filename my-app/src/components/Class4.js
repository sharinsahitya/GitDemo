import React, { Component } from 'react'
import axios from 'axios';
//class components fetching ur data using useeffect
export default class Class4 extends Component {

    constructor() {
        super();
        this.state = {   //initial value=empty array
            apidata: []
        }
    }

    componentDidMount() {     //fetch data from api
        axios.get('http://localhost:5224/api/home/dept')
            .then(res => {
                // console.log(res);
                console.log(res.data);
                //update state variable from empty[] to api[]  dom modification then u will use refernece 
                this.setState({
                    apidata: res.data
                });
            })
    }
    render() {
        //console.log(this.state.apidata , 'render');
        var result = this.state.apidata;

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
            result.map((number) =>
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
    
}
