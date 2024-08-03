import React, { useEffect, useState } from "react";
import axios from "axios";
import Auth from "./Auth";

export default function GetQuotes() {
  Auth();

  const [author, setAuthor] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [message, setMessage] = useState("");

  const API_URL = "http://localhost:4000/api/quote/getQuote";

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get(API_URL, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      const data = await response.data
      const quote = await data.quotes
      console.log(quote);
    }
    fetchdata();
  }, []);

  async function GetAllQuotes(e) {
    e.preventDefault();
    try {
      const response = await axios.get(API_URL, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      setQuotes(response.data.quotes);
    } catch (err) {
      console.log(err);
      setMessage('Error fetching quotes');
    }
  }

  return (
    <>
     <button className="btn btn-success" onClick={GetAllQuotes}>Fetch Quotes</button>
      
      <ul>
        {quotes.map((quoteObj) => (
          <li key={quoteObj._id}>
            <h2>{quoteObj.quote}</h2>
          </li>
        ))}
      </ul>
    </>
  );
}
