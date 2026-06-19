import { useState } from "react";
import { Link } from "react-router-dom";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { db, storage } from "../../firebase";
import "../../styles/admin.css";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      let coverUrl = "";
      let pdfUrl = "";

      if (coverImage) {
        const coverRef = ref(
          storage,
          `books/covers/${Date.now()}-${coverImage.name}`
        );

        await uploadBytes(coverRef, coverImage);
        coverUrl = await getDownloadURL(coverRef);
      }

      if (pdfFile) {
        const pdfRef = ref(storage, `books/pdfs/${Date.now()}-${pdfFile.name}`);

        await uploadBytes(pdfRef, pdfFile);
        pdfUrl = await getDownloadURL(pdfRef);
      }

      await addDoc(collection(db, "books"), {
        title,
        author,
        price: Number(price),
        description,
        coverImage: coverUrl,
        pdfUrl,
        createdAt: serverTimestamp(),
      });

      alert("Book added successfully!");

      setTitle("");
      setAuthor("");
      setPrice("");
      setDescription("");
      setCoverImage(null);
      setPdfFile(null);

      e.target.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to save book.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <h2>MifPaPri Admin</h2>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/books">Manage Books</Link>
        <Link to="/admin/add-book" className="active">
          Add Book
        </Link>
        <Link to="/">Store Website</Link>
      </aside>

      <main className="admin-main">
        <h1>Add New Book</h1>

        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label>Book Title</label>
              <input
                type="text"
                placeholder="Enter book title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Author</label>
              <input
                type="text"
                placeholder="Enter author name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label>Price</label>
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Book Cover</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setCoverImage(e.target.files[0])}
              required
            />
          </div>

          <div>
            <label>PDF File</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setPdfFile(e.target.files[0])}
            />
          </div>

          <div>
            <label>Description</label>
            <textarea
              placeholder="Enter book description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="admin-submit-btn" disabled={loading}>
            {loading ? "Saving..." : "Save Book"}
          </button>
        </form>
      </main>
    </div>
  );
}

export default AddBook;