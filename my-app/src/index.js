import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './style.css';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Home from './components/Home';
  import Register from './components/Register';
  import Add from './components/Add';
  import Show from './components/Show';
  import Login from './components/Login';
  import Pagenotfound from './components/Pagenotfound';
  import Class1 from './components/Class1';
  import Class2 from './components/Class2' ;
  import Class3 from './components/Class3' ;
  import Class4 from './components/Class4' ;
  import Comp1 from './components/Comp1' ;
  
//funct in router dom we have to provide path
//console.log(React);
//console.log(ReactDOM);

const projectroute = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path:'', element:<Home/>} ,
        {path:'login', element:<Login/>} ,
        {path:'register', element:<Register/>} ,
        {path:'add', element:<Add/>} ,
        {path:'show', element:<Show/>} ,
        {path:'*', element:<Pagenotfound/>} ,
        {path:'class1',element:<Class1 name="user" age="20" place="Mumbai"></Class1>},
        {path:'class2',element:<Class2></Class2>},
        {path:'class3',element:<Class3></Class3>},
        {path:'class4',element:<Class4></Class4>},
        {path:'/Comp1',element:<Comp1></Comp1>}
                ],
    },
]);

const ans = ReactDOM.createRoot(document.getElementById('root'));
//console.log(ans);
ans.render(<RouterProvider router={projectroute}/>);
//ans.render(<App/>);