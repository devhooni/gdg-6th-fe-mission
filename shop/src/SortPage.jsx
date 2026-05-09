import { useState } from "react";
import Item from "./Item";
import { sortedData } from "./data/mockData";

function SortPage() {
  const [items, setItems] = useState(sortedData);

  const handleSort = (type) => {
    let sortedItems = [...items];

    if (type === "이름(가나다순)") {
      sortedItems.sort((a, b) => a.itemName.localeCompare(b.itemName));
    } else if (type === "가격") {
      sortedItems.sort((a, b) => a.price - b.price);
    }

    setItems(sortedItems);
  };

  return (
    <>
      <div className="main-page">
        <div className="search-container">
          <select
            onChange={(e) => handleSort(e.target.value)}
            name="sort"
            className="quantity-box"
            defaultValue={""}>
            <option value="" disabled hidden>
              정렬 선택
            </option>
            <option value="이름(가나다순)">이름(가나다순)</option>
            <option value="가격">가격 낮은순</option>
          </select>
        </div>

        <div className="search-content-container">
          <div className="last-bought-box">내 구매 내역</div>

          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
          <div className="cart-buy-btn">장바구니 구매하기</div>
        </div>
      </div>
    </>
  );
}

export default SortPage;
