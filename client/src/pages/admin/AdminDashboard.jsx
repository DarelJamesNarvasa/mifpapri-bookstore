import { Link } from "react-router-dom";
import { MdMenuBook, MdShoppingCart, MdPeople, MdAttachMoney } from "react-icons/md";
import "../../styles/admin.css";

function AdminDashboard() {
  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <h2>MifPaPri Admin</h2>
        <Link to="/admin" className="active">Dashboard</Link>
        <Link to="/admin/books">Manage Books</Link>
        <Link to="/admin/add-book">Add Book</Link>
        <Link to="/">Store Website</Link>
      </aside>

      <main className="admin-main">
        <h1>Dashboard</h1>

        <div className="admin-stats">
          <div className="admin-card">
            <MdMenuBook />
            <div>
              <h3>25</h3>
              <p>Total Books</p>
            </div>
          </div>

          <div className="admin-card">
            <MdShoppingCart />
            <div>
              <h3>12</h3>
              <p>Total Orders</p>
            </div>
          </div>

          <div className="admin-card">
            <MdPeople />
            <div>
              <h3>48</h3>
              <p>Customers</p>
            </div>
          </div>

          <div className="admin-card">
            <MdAttachMoney />
            <div>
              <h3>₱8,950</h3>
              <p>Total Sales</p>
            </div>
          </div>
        </div>

        <div className="admin-panel">
          <h2>Recent Orders</h2>

          <table className="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Book</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#ORD-001</td>
                <td>Juan Dela Cruz</td>
                <td>Atomic Habits</td>
                <td>₱599.00</td>
                <td><span className="status paid">Paid</span></td>
              </tr>
              <tr>
                <td>#ORD-002</td>
                <td>Maria Santos</td>
                <td>Rich Dad Poor Dad</td>
                <td>₱550.00</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;