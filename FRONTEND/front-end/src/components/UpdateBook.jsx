import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./UpdateBook.css";

const UpdateBook = () => {
    const { id } = useParams(); // Get the book ID from URL
    const navigate = useNavigate();
    
    // State to store book data
    const [book, setBook] = useState({
        BookImage: "",
        BookName: "",
        AuthorName: "",
        Cost: "",
    });

    // Fetch book details when component mounts
    useEffect(() => {
        axios.get(`http://localhost:3000/home/${id}`)
            .then((response) => {
                if (response.data) {
                    console.log("Fetched Book Data:", response.data); // Debugging line
                    setBook(response.data); // Populate the form with existing data
                }
            })
            .catch(error => {
                console.error("Error fetching book details:", error);
            });
    }, [id]);

    // Handle form changes
    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:3000/home/${id}`, book)
            .then(() => {
                alert("Book updated successfully!");
                navigate("/"); // Redirect to Home Page
            })
            .catch(error => {
                console.error("Error updating book:", error);
            });
    };

    return (
        <div className="update-container">
            <h2>Update Book</h2>
            <form className="update-form" onSubmit={handleSubmit}>
                <label>Book Image URL:</label>
                <input type="text" name="BookImage" value={book.BookImage} onChange={handleChange} required/>

                <label>Book Name:</label>
                <input type="text" name="BookName" value={book.BookName } onChange={handleChange} />

                <label>Author Name:</label>
                <input type="text" name="AuthorName" value={book.AuthorName} onChange={handleChange} />

                <label>Cost:</label>
                <input type="number" name="Cost" value={book.Cost } onChange={handleChange} />

                <button type="submit">Update Book</button>
            </form>
        </div>
    );
};

export default UpdateBook;
