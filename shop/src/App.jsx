import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-page">
        <div className="search-container">
          <input className="search-box" type="text" placeholder="상품 검색.." />
          <div className="search-btn">검색</div>
        </div>
        <div className="search-content-container">
          <img
            src="gdg-favicon.svg"
            style={{ width: "400px", opacity: "0.1" }}
          />
          <p>검색 결과가 없습니다</p>
        </div>
        <div className="cart-buy-btn">장바구니 구매하기</div>
      </div>
    </>
  );
}

export default App;
