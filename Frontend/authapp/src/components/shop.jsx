import React, { useEffect, useState } from "react";
import axios from "axios";

export default function shop() {
  const [products, setProducts] = useState([]);

  const API = "http://localhost:4000/api/product/getproducts";

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(API);
      const data = await response.data;
      setProducts(data.productList);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          {products.length > 0 && products.map((product, index)=>(
          <div className="col-md-3" key={index}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={`http://localhost:4000/${product.image}`}  alt="..." style={{height : '200px'}}/>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                 {product.description}
                </p>
              </div>
            </div>
          </div>

))}
        </div>
      </div>
    </div>
  );
}