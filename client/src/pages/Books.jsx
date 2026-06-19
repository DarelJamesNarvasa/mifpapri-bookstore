import { useEffect, useState } from "react";

import { collection, getDocs, orderBy, query } from "firebase/firestore";

import { db } from "../firebase";

import { Link } from "react-router-dom";

import "../styles/bookPage.css";

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const booksQuery = query(
        collection(db, "books"),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(booksQuery);

      const bookList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBooks(bookList);
    } catch (error) {
      console.error("Error loading books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchBooks();
  }, []);

  return (
    <>
      <section className="books-header-section">
        <div className="container">
          <div className="books-header-content">
            <div>
              <h1>Books</h1>

              <p>
                Explore publications, books, and research outputs produced by
                MifPaPRi and its partners.
              </p>
            </div>

            <div className="books-decoration">
              <i className="fas fa-book-open"></i>
              <i className="fas fa-book"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="books-page">
        <div className="container">
          {loading ? (
            <div className="loading-books">
              <h3>Loading books...</h3>
            </div>
          ) : books.length === 0 ? (
            <div className="loading-books">
              <h3>No books available.</h3>
            </div>
          ) : (
            <div className="books-grid">
              {books.map((book) => (
                <div className="book-card" key={book.id}>
                  <div className="book-image-wrap">
                    <img
                      src={
                        book.coverImage ||
                        "https://via.placeholder.com/300x420?text=Book+Cover"
                      }
                      alt={book.title}
                      className="book-image"
                    />
                  </div>

                  <div className="book-info">
                    <h3>{book.title}</h3>

                    <p className="book-author">
                      {book.author}
                    </p>

                    <p className="book-price">
                      ₱{Number(book.price).toFixed(2)}
                    </p>

                    <Link to={`/book/${book.id}`} className="book-btn">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Books;