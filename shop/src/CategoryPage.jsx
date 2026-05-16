import { useState, useEffect } from "react";
import Item from "./Item";

function CategoryPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data/category.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("데이터 로드 실패:", error));
  }, []);

  return (
    <>
      <div className="main-page">
        <div className="search-container">
          <select
            onChange={(e) => {
              console.log(e.target.value);
            }}
            name="quantity"
            className="quantity-box"
            defaultValue="">
            <option value="" disabled hidden>
              카테고리 선택
            </option>
            <option>의류</option>
            <option>전자기기</option>
            <option>화장품</option>
            <option>식품</option>
          </select>
        </div>
        <div className="search-content-container">
          <div className="last-bought-box">내 구매 내역</div>

          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
        <div className="cart-buy-btn">장바구니 구매하기</div>
      </div>
    </>
  );
}

export default CategoryPage;
