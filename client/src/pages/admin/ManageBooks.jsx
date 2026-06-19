import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "../../firebase";
import "../../styles/admin.css";

function ManageBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      setLoading(true);

      const booksQuery = query(
        collection(db, "books"),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(booksQuery);

      const bookList = querySnapshot.docs.map((docItem) => ({
        id: docItem.id,
        ...docItem.data(),
      }));

      setBooks(bookList);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch books.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (bookId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "books", bookId));
      alert("Book deleted successfully!");
      fetchBooks();
    } catch (error) {
      console.error(error);
      alert("Failed to delete book.");
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchBooks();
  }, []);

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <h2>MifPaPri Admin</h2>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/books" className="active">
          Manage Books
        </Link>
        <Link to="/admin/add-book">Add Book</Link>
        <Link to="/">Store Website</Link>
      </aside>

      <main className="admin-main">
        <div className="admin-header">
          <h1>Manage Books</h1>
          <Link to="/admin/add-book" className="admin-btn">
            + Add Book
          </Link>
        </div>

        <div className="admin-panel">
          {loading ? (
            <p>Loading books...</p>
          ) : books.length === 0 ? (
            <p>No books found. Add your first book.</p>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Book</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {books.map((book) => (
                  <tr key={book.id}>
                    <td>
                      <div className="admin-book-info">
                        <img
                          src={book.coverImage || "https://via.placeholder.com/80x100"}
                          alt={book.title}
                        />
                        <strong>{book.title}</strong>
                      </div>
                    </td>

                    <td>{book.author}</td>
                    <td>{book.category}</td>
                    <td>₱{Number(book.price).toFixed(2)}</td>
                    <td>{book.stock}</td>

                    <td>
                      <button className="icon-btn edit" type="button">
                        <MdEdit />
                      </button>

                      <button
                        className="icon-btn delete"
                        type="button"
                        onClick={() => handleDelete(book.id)}
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}

export default ManageBooks;