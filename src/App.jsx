import { useState } from "react";
import "./App.css";
import BookList from "./tags/BookList";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ 수정
import Header from "./tags/Header";
import BookForm from "./tags/BookForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      {" "}
      {/* ✅ 여기 수정 */}
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/insert" element={<BookForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
