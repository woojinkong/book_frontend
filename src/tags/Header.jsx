import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
      <Link to="/" style={{ marginRight: "15px" }}>
        도서 목록
      </Link>
      <Link to="/insert">도서 등록</Link>
    </nav>
  );
};

export default Header;
