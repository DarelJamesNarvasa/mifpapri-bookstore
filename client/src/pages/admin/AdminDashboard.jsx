import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MdMenuBook,
  MdShoppingCart,
  MdPeople,
  MdAttachMoney,
} from "react-icons/md";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import "../../styles/admin.css";

function AdminDashboard() {
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalSales, setTotalSales] = useState(0);

  const loadDashboardData = async () => {
    try {
      const booksSnapshot = await getDocs(collection(db, "books"));
      setTotalBooks(booksSnapshot.size);

      // Future collections
      try {
        const ordersSnapshot = await getDocs(collection(db, "orders"));
        setTotalOrders(ordersSnapshot.size);

        let sales = 0;

        ordersSnapshot.forEach((doc) => {
          const order = doc.data();
          sales += order.total || 0;
        });

        setTotalSales(sales);
      } catch {
        setTotalOrders(0);
        setTotalSales(0);
      }

      try {
        const usersSnapshot = await getDocs(collection(db, "users"));
        setTotalCustomers(usersSnapshot.size);
      } catch {
        setTotalCustomers(0);
      }
    } catch (error) {
      console.error("Dashboard Error:", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadDashboardData();
  }, []);

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <h2>MifPaPri Admin</h2>

        <Link to="/admin" className="active">
          Dashboard
        </Link>

        <Link to="/admin/books">
          Manage Books
        </Link>

        <Link to="/admin/add-book">
          Add Book
        </Link>

        <Link to="/">
          Store Website
        </Link>

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("adminAuth");
            window.location.href = "/admin/login";
          }}
        >
          Logout
        </button>
      </aside>

      <main className="admin-main">
        <h1>Dashboard</h1>

        <div className="admin-stats">
          <div className="admin-card">
            <MdMenuBook />
            <div>
              <h3>{totalBooks}</h3>
              <p>Total Books</p>
            </div>
          </div>

          <div className="admin-card">
            <MdShoppingCart />
            <div>
              <h3>{totalOrders}</h3>
              <p>Total Orders</p>
            </div>
          </div>

          <div className="admin-card">
            <MdPeople />
            <div>
              <h3>{totalCustomers}</h3>
              <p>Customers</p>
            </div>
          </div>

          <div className="admin-card">
            <MdAttachMoney />
            <div>
              <h3>₱{totalSales.toLocaleString()}</h3>
              <p>Total Sales</p>
            </div>
          </div>
        </div>

        <div className="admin-panel">
          <h2>System Overview</h2>

          <table className="admin-table">
            <thead>
              <tr>
                <th>Collection</th>
                <th>Total Records</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Books</td>
                <td>{totalBooks}</td>
                <td>
                  <span className="status paid">
                    Active
                  </span>
                </td>
              </tr>

              <tr>
                <td>Orders</td>
                <td>{totalOrders}</td>
                <td>
                  <span className="status pending">
                    Ready
                  </span>
                </td>
              </tr>

              <tr>
                <td>Customers</td>
                <td>{totalCustomers}</td>
                <td>
                  <span className="status pending">
                    Ready
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;