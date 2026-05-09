import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [navClicked, setnavClicked] = useState(null);
  const navigate = useNavigate();

  const navItems = [
    { name: "카테고리 필터링", path: "/category" },
    { name: "가격 범위 필터링", path: "/price" },
    { name: "상품 정렬", path: "/sort" },
  ];

  return (
    <div className="navbar">
      <img
        src="gdg-favicon.svg"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
          setnavClicked(null);
        }}
      />
      <div className="category-box">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={() => {
              setnavClicked(index);
            }}
            style={{
              color: navClicked === index ? "rgb(56, 152, 255)" : "black",
            }}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className="admin-box">관리자</div>
    </div>
  );
}

export default Navbar;
