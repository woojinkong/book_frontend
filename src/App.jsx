import { useState } from "react";
import "./App.css";
import BookList from "./tags/BookList";
import { Routes, Router, Route } from "react-router-dom";
import Header from "./tags/Header";
import BookForm from "./tags/BookForm";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/insert" element={<BookForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
