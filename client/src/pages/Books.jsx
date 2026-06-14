import "../styles/bookPage.css";
import tagoloanBook from "../assets/images/books/tagoloan-book.jpg";

function Books() {
  const books = [
    {
      title: "TAGOLOAN: Mga minugbong asoy sa kasaysayan ug kinabuhi",
      author: "Primitivo III Cabanes Ragandang",
      price: "₱599.00",
      image: tagoloanBook,
    },
    {
      title: "TAGOLOAN:",
      author: "Primitivo III Cabanes Ragandang",
      price: "₱599.00",
      image: tagoloanBook,
    },
    {
      title: "TAGOLOAN: Mga minugbong asoy sa kasaysayan ug kinabuhi",
      author: "Primitivo III Cabanes Ragandang",
      price: "₱599.00",
      image: tagoloanBook,
    },
    {
      title: "TAGOLOAN: Mga minugbong asoy sa kasaysayan ug kinabuhi",
      author: "Primitivo III Cabanes Ragandang",
      price: "₱599.00",
      image: tagoloanBook,
    },
    {
      title: "TAGOLOAN: Mga minugbong asoy sa kasaysayan ug kinabuhi",
      author: "Primitivo III Cabanes Ragandang",
      price: "₱599.00",
      image: tagoloanBook,
    },
    {
      title: "TAGOLOAN: Mga minugbong asoy sa kasaysayan ug kinabuhi",
      author: "Primitivo III Cabanes Ragandang",
      price: "₱599.00",
      image: tagoloanBook,
    },
  ];

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
          <div className="books-grid">
            {books.map((book, index) => (
              <div className="book-card" key={index}>
                <div className="book-image-wrap">
                  <img src={book.image} alt={book.title} className="book-image" />
                </div>

                <div className="book-info">
                  <h3>{book.title}</h3>
                  <p className="book-author">{book.author}</p>
                  <p className="book-price">{book.price}</p>
                  <button className="book-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Books;