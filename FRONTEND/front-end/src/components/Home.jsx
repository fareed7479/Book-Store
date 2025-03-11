import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css'; // Import styles

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/home')
      .then(response => setBooks(response.data.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/home/${id}`)
      .then(() => setBooks(books.filter(book => book._id !== id)))
      .catch(error => console.error('Error deleting book:', error));
  };

  return (
    <div className="container">
      <h2>Book List</h2>
      <Link to="/add">
        <button className="create">Add New Book</button>
      </Link>
      <div className="book-list">
        {books.map(book => (
          <div key={book._id} className="book-card">
            <img src={book.BookImage} alt={book.BookName} />
            <h3>{book.BookName}</h3>
            <p>Author: {book.AuthorName}</p>
            <p>Price: ${book.Cost}</p>
            <div className="book-actions">
            <Link to={`/update/${book._id}`}>
                    <button className="update-btn">Update</button>
            </Link>
              <button className="delete" onClick={() => handleDelete(book._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Home;
