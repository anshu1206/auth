import React,{useEffect, useState} from 'react'
import axios from 'axios'
export default function AddProduct() {
    const [product,setProduct] = useState ({name:"",description:"",price:"",category:"none"})
    const [filePath,setFilePath] = useState(null)
    const [categories,setCategories] = useState([])

    const categoryAPI = "http://localhost:4000/api/category/getcategory"
    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(categoryAPI)
            const data = await response.data
            setCategories(data)
        }
        fetchData()
    },[])
    function handleChange(e){
        setProduct((preData) => ({...preData, [e.target.name]:e.target.value}))
    }
    const postProductApi = "http://localhost:4000/api/product/postproduct"
   async function handleSubmit(e){
        e.preventDefault();
        const newFormData = new FormData()
        newFormData.append('name',product.name)
        newFormData.append('category',product.category)
        newFormData.append('price',product.price)
        newFormData.append('description',product.description)
        newFormData.append('image',filePath)
        console.log(product);
        console.log(filePath)
   

    try{
      const response = await axios.post(postProductApi,newFormData,{
        headers:{
          "Content-Type" : "Multipart/form-data"
        }
      })
      console.log(response)
    }catch(err){
      console.log(error)
    }
  }
  return (
    <>
       <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-5 m-auto">
            <form action="" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  aria-label="description"
                  aria-describedby="basic-addon1"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  aria-label="price"
                  aria-describedby="basic-addon1"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group mb-3">
               <select name="category" value={product.category} onChange={handleChange}>
                <option value="none" disabled>
                    ---Choose Category---
                </option>
                {
                    categories.length > 0 && categories.map((category,index) => (
                        <option key={index} value={category.name}>
                            {category.name}
                        </option>
                    ))
                }
               </select>
               <div className="input-group mt-3">
                <input
                  type="file"
                  className="form-control"
                  placeholder="Image"
                  aria-label="image"
                  aria-describedby="basic-addon1"
                  onChange={(e) => {setFilePath(e.target.files[0])}}
                />
              </div>
              </div>
             <button className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
