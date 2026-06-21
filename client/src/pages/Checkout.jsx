import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";
import "../styles/checkout.css";

function Checkout() {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("gcash");
  const [submitting, setSubmitting] = useState(false);

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

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (!book) return;

    try {
      setSubmitting(true);

      await addDoc(collection(db, "orders"), {
        customerName,
        customerEmail,
        paymentMethod,
        bookId: book.id,
        bookTitle: book.title,
        amount: Number(book.price),
        paymentStatus: "pending",
        createdAt: serverTimestamp(),
      });

      alert(`Order created using ${paymentMethod.toUpperCase()}. Payment integration will be added next.`);
    } catch (error) {
      console.error(error);
      alert("Failed to create order.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="checkout-page">Loading checkout...</div>;
  }

  if (!book) {
    return <div className="checkout-page">Book not found.</div>;
  }

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-form-card">
          <Link to={`/book/${book.id}`} className="checkout-back">
            ← Back to Book
          </Link>

          <h1>Checkout</h1>
          <p>Enter your details to continue your purchase.</p>

          <form onSubmit={handleCheckout}>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
            />

            <label>Payment Method</label>
            <div className="payment-methods">
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="gcash"
                  checked={paymentMethod === "gcash"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>GCash</span>
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="maya"
                  checked={paymentMethod === "maya"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>Maya</span>
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>Debit / Credit Card</span>
              </label>
            </div>

            <button type="submit" disabled={submitting}>
              {submitting ? "Processing..." : "Proceed to Payment"}
            </button>
          </form>
        </div>

        <div className="checkout-summary-card">
          <h2>Order Summary</h2>

          <div className="checkout-book">
            <img src={book.coverImage} alt={book.title} />

            <div>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          </div>

          <div className="summary-row">
            <span>Book Price</span>
            <strong>₱{Number(book.price).toFixed(2)}</strong>
          </div>

          <div className="summary-row">
            <span>Payment Method</span>
            <strong>{paymentMethod.toUpperCase()}</strong>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <strong>₱{Number(book.price).toFixed(2)}</strong>
          </div>

          <p className="checkout-note">
            After successful payment, the digital book will be sent to your email.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Checkout;