import { useState } from "react";
import "./App.css";
import BookList from "./tags/BookList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BookList />
    </>
  );
}

export default App;
