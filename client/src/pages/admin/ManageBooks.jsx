import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import "../../styles/admin.css";

function ManageBooks() {
  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      price: "₱599.00",
      stock: 15,
      image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    },
    {
      id: 2,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: "₱550.00",
      stock: 10,
      image: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
    },
  ];

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <h2>MifPaPri Admin</h2>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/books" className="active">Manage Books</Link>
        <Link to="/admin/add-book">Add Book</Link>
        <Link to="/">Store Website</Link>
      </aside>

      <main className="admin-main">
        <div className="admin-header">
          <h1>Manage Books</h1>
          <Link to="/admin/add-book" className="admin-btn">+ Add Book</Link>
        </div>

        <div className="admin-panel">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Book</th>
                <th>Author</th>
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
                      <img src={book.image} alt={book.title} />
                      <strong>{book.title}</strong>
                    </div>
                  </td>
                  <td>{book.author}</td>
                  <td>{book.price}</td>
                  <td>{book.stock}</td>
                  <td>
                    <button className="icon-btn edit"><MdEdit /></button>
                    <button className="icon-btn delete"><MdDelete /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default ManageBooks;