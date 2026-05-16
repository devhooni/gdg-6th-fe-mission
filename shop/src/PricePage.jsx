import { useState, useEffect } from "react";
import Item from "./Item";

function PricePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data/priceSelected.json")
      .then((response) => response.json())
      .then((data) => setItems(data.items || []))
      .catch((error) => console.error("데이터 로드 실패:", error));
  }, []);

  return (
    <>
      <div className="main-page">
        <div className="search-container">
          <input
            className="price-input"
            type="number"
            defaultValue={0}
            min={0}
          />
          <input
            className="price-input"
            type="number"
            defaultValue={0}
            min={0}
          />
          <div className="search-btn">검색</div>
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

export default PricePage;
