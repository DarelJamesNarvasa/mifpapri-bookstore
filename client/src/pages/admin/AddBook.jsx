import { Link } from "react-router-dom";
import "../../styles/admin.css";

function AddBook() {
  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <h2>MifPaPri Admin</h2>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/books">Manage Books</Link>
        <Link to="/admin/add-book" className="active">Add Book</Link>
        <Link to="/">Store Website</Link>
      </aside>

      <main className="admin-main">
        <h1>Add New Book</h1>

        <form className="admin-form">
          <div className="form-row">
            <div>
              <label>Book Title</label>
              <input type="text" placeholder="Enter book title" />
            </div>

            <div>
              <label>Author</label>
              <input type="text" placeholder="Enter author name" />
            </div>
          </div>

          <div className="form-row">
            <div>
              <label>Price</label>
              <input type="number" placeholder="Enter price" />
            </div>

            <div>
              <label>Stock</label>
              <input type="number" placeholder="Enter stock quantity" />
            </div>
          </div>

          <div className="form-row">
            <div>
              <label>Category</label>
              <select>
                <option>Self Help</option>
                <option>History</option>
                <option>Finance</option>
                <option>Psychology</option>
              </select>
            </div>

            <div>
              <label>Book Cover</label>
              <input type="file" />
            </div>
          </div>

          <div>
            <label>Description</label>
            <textarea placeholder="Enter book description"></textarea>
          </div>

          <button type="submit" className="admin-submit-btn">
            Save Book
          </button>
        </form>
      </main>
    </div>
  );
}

export default AddBook;