import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [books, setBooks] = useState(null);

  const apiUrl = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  
  const fetchData = async() => {
    const response = await axios.get(apiUrl)
    setBooks(response.data)
  }

  return (
    <div className="App">
      <h1>Game of Thrones books</h1>
     <div>
       <button className="fetch-button" onClick={fetchData}>
         Fetch Data
       </button>
     </div>
     <div className="books">
      {books &&
        books.map((book, index) => {
          const cleanedDate = new Date(book.released).toDateString();
          const authors = book.authors.join(', ');

          return(
            <div className="book" key={index}>
              <h3>Book {index + 1}</h3>
              <h2>{book.name}</h2>

              <div className="details">
                <p>Authors: {authors}</p>
                <p>Book: {book.numberOfPages}</p>
                <p>Country: {book.country}</p>
                <p>Date: {cleanedDate}</p>
              </div>
            </div>
          );
        })}
     </div>
    </div>
  );
}

export default App;
