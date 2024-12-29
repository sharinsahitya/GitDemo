import React from "react";
//render+return must react component=class component

class Class1 extends React.Component{

    myfunc(){
        //alert()
        this.props.name = 'user2';
    }
    render(){
        console.log('Mounted');
        return (
            <div className="container">
                <h1> Props </h1>
                <p>
                    {this.props.name}
                    {this.props.age}
                    {this.props.place}
                </p>
                <button onClick={()=>{this.myfunc()}}>Enter</button>
            </div>
        )
    }
}
export default Class1;