import React,{useState} from 'react'
import axios from 'axios'
export default function Quote() {
    const [user, setUser] = useState({ username: "", password: "" });
    const [message, setMessage] = useState("");
  
    const API = "http://localhost:4000/api/quote/postQuote";
   
    async function handleSubmit(e) {
      e.preventDefault();
      try {
        const response = await axios.post(API, user);
        const data = await response.data;
        setMessage('Quote added successfully');
        console.log(message)
      } catch (err) {
        console.log(err);
        setMessage('Error');
      }
    }
  
    return (
      <div>
        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col-5 m-auto">
              <form action="">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Quote"
                    aria-label="quote"
                    aria-describedby="basic-addon1"
                    name="quote"
                    value={user.quote}
                    onChange={(e) => {
                      setUser((preUser) => ({
                        ...preUser,
                        [e.target.name]: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="author"
                    aria-label="author"
                    aria-describedby="basic-addon1"
                    name="author"
                    value={user.author}
                    onChange={(e) => {
                      setUser((preUser) => ({
                        ...preUser,
                        [e.target.name]: e.target.value,
                      }));
                    }}
                  />
                </div>
                <button className="btn btn-success" onClick={handleSubmit}>
                  Submit
                </button>
              </form>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      </div>
  )
}
