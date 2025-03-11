import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css'; // Import styles

const AddBook = () => {
  const [book, setBook] = useState({ BookImage: '', BookName: '', AuthorName: '', Cost: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/home/book', book)
      .then(() => navigate('/'))
      .catch(error => console.error('Error adding book:', error));
  };

  return (
    <div className="form-container">
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Book Image URL:</label>
          <input type="text" name="BookImage" value={book.BookImage} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Book Name:</label>
          <input type="text" name="BookName" value={book.BookName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Author Name:</label>
          <input type="text" name="AuthorName" value={book.AuthorName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Cost:</label>
          <input type="number" name="Cost" value={book.Cost} onChange={handleChange} required />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
