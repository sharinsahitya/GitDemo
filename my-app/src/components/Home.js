import React from "react";
import Product from './Product';

function Home(){
    return (
        <div className="container">
  <div className="row">
    <div className="col-xl-3">
    <Product name="jeans" price="1000"/>
    </div>
    <div className="col-xl-3">
    <Product name="belt" price="2000"/>
    </div>
    <div className="col-xl-3">
    <Product name="shirt" price="3000"/>
    </div>
    <div className="col-xl-3">
    <Product name="shoes" price="4000"/>
    </div>
  </div>
</div>
    )
}

export default Home;
