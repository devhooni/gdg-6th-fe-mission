import { useState, useEffect } from "react";
import Item from "./Item";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadItems = async () => {
      try {
        const response = await fetch(
          "http://192.168.196.188:8080/api/user/products/find",
        );

        if (!response.ok) {
          throw new Error("상품 조회 실패");
        }

        const data = await response.json();
        const products = Array.isArray(data)
          ? data
          : data.products
            ? data.products
            : [data];

        setItems(products);
      } catch (fetchError) {
        console.error("상품 조회 실패:", fetchError);
        setError("상품 정보를 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, []);

  return (
    <>
      <div className="main-page">
        <div className="search-container">
          <input className="search-box" type="text" placeholder="상품 검색.." />
          <div className="search-btn">검색</div>
        </div>
        <div className="search-content-container">
          <div className="last-bought-box">상품 목록</div>

          {loading ? (
            <p>불러오는 중...</p>
          ) : error ? (
            <p>{error}</p>
          ) : items.length === 0 ? (
            <p>상품이 없습니다.</p>
          ) : (
            items.map((item, index) => (
              <Item
                key={item.ProductId ?? item.id ?? item.productName ?? index}
                item={item}
              />
            ))
          )}
        </div>
        <div className="cart-buy-btn">장바구니 구매하기</div>
      </div>
    </>
  );
}

export default App;
