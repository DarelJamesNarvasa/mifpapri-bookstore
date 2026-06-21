import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import { db } from "../firebase";
import "../styles/bookDetails.css";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookRef = doc(db, "books", id);
        const bookSnap = await getDoc(bookRef);

        if (bookSnap.exists()) {
          setBook({
            id: bookSnap.id,
            ...bookSnap.data(),
          });
        }
      } catch (error) {
        console.error("Error loading book:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return <div className="book-details-page">Loading book...</div>;
  }

  if (!book) {
    return <div className="book-details-page">Book not found.</div>;
  }

  return (
    <main className="book-details-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/books">Books</Link> /{" "}
        <span>{book.title}</span>
      </div>

      <section className="book-details-container">
        <div className="book-cover-box">
          <img src={book.coverImage} alt={book.title} />
        </div>

        <div className="book-details-info">
          <h1>{book.title}</h1>

          <p className="book-author">{book.author}</p>

          <h2>₱{Number(book.price).toFixed(2)}</h2>

          <p className="book-description">{book.description}</p>

          <div className="details-buttons">
            <Link
              to={`/checkout/${book.id}`}
              className="add-cart-btn"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BookDetails;