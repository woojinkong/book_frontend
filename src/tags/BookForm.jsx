import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const BookForm = () => {
  const [no, setNO] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [publisher, setPublisher] = useState("");

  const navigate = useNavigate();

  const savebook = async (e) => {
    //기본이벤트제거
    e.preventDefault();

    const book = { no, title, price, qty, publisher };
    const res = await axios.post("http://43.201.111.32:8080/api/books", book);
    navigate("/");
  };

  return (
    <div>
      <h2>도서등록</h2>
      <hr />
      <form onSubmit={savebook}>
        도서번호 :{" "}
        <input type="text" value={no} onChange={(e) => setNO(e.target.value)} />
        <br />
        도서이름 :{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        도서가격 :{" "}
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        도서수량 :{" "}
        <input
          type="text"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <br />
        출판사명 :{" "}
        <input
          type="text"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default BookForm;
