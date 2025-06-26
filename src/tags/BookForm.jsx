import React, { useState } from "react";
import axios from "axios";

const BookForm = () => {
  const [form, setForm] = useState({
    no: "",
    price: "",
    publisher: "",
    qty: "",
    title: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 숫자 필드는 정수 변환
      const payload = {
        ...form,
        no: parseInt(form.no),
        price: parseInt(form.price),
        qty: parseInt(form.qty),
      };

      await axios.post("http://localhost:8080/api/books", payload);
      alert("도서 등록 성공");
      // 초기화
      setForm({
        no: "",
        title: "",
        price: "",
        qty: "",
        publisher: "",
      });
    } catch (error) {
      console.error("등록 오류:", error);
      alert("도서 등록 실패");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="no"
        value={form.no}
        onChange={handleChange}
        placeholder="도서 번호"
        required
      />
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="제목"
        required
      />
      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="가격"
        required
      />
      <input
        name="qty"
        value={form.qty}
        onChange={handleChange}
        placeholder="수량"
        required
      />
      <input
        name="publisher"
        value={form.publisher}
        onChange={handleChange}
        placeholder="출판사"
        required
      />
      <button type="submit">도서 등록</button>
    </form>
  );
};

export default BookForm;
