import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Research from "./pages/Research";
import WhatWeDo from "./pages/WhatWeDo";
import Activities from "./pages/Activities";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import TrainingWorkshop from "./pages/TrainingWorkshop";
import BookDetails from "./pages/BookDetails";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageBooks from "./pages/admin/ManageBooks";
import AddBook from "./pages/admin/AddBook";

import "./styles/admin.css";
import "./styles/style.css";

function AppContent() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/research" element={<Research />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/training-workshop" element={<TrainingWorkshop />} />
        <Route path="/book/:id" element={<BookDetails />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin/books"
          element={
            <ProtectedAdminRoute>
              <ManageBooks />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin/add-book"
          element={
            <ProtectedAdminRoute>
              <AddBook />
            </ProtectedAdminRoute>
          }
        />
      </Routes>

      {!isAdminPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;