import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Book() {
  const baseUrl = "http://localhost:8000/api/books";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = baseUrl;
        if (selectedCategory) {
          url += `?category=${selectedCategory}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          // Provide more specific error messages based on the status code
          switch (response.status) {
            case 404:
              throw new Error("Not found. The resource you're looking for does not exist.");
            case 500:
              throw new Error("Server error. Please try again later.");
            default:
              throw new Error("Failed to fetch data.");
          }
        }

        const jsonData = await response.json();

        // Handle the potential issue where the data might not be an array
        if (!Array.isArray(jsonData)) {
          throw new Error("Received data is not in the expected format.");
        }

        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error(error); // log the error for debugging purposes
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <div>
      <h1>Books</h1>
      <p>
        This is where we use NodeJs, Express & MongoDB to grab some data. The
        data below is pulled from a MongoDB database.
      </p>

      <Link to="/createbook">+ Add New Book</Link>

      <h2>Fetch Example</h2>

      <div className="filters">
        <label>Categories</label>
        <select onChange={(e)=> setSelectedCategory(e.target.value)}>
          <option value="">All</option>
          <option value="romance">Romance</option>
          <option value="science">Science</option>
          <option value="crime">Crime</option>
          <option value="food">Food</option>
          <option value="adventure">Adventure</option>
          <option value="thriller">Thriller</option>
          <option value="fiction">Fiction</option>
          <option value="other">other</option>
          <option value="coding">Coding</option>
          <option value="careers">Careers</option>
        </select>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : data.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <ul className="books">
          {data.map((item) => (
            <li key={item._id}>
              <Link to={`/books/${item.slug}`}>
                <img src={`http://localhost:8000/uploads/${item.thumbnail}`} alt={item.title} />
                <h3>{item.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Book;
