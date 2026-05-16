import React, { useState } from "react";

function AdminPage() {
  const [regItemName, setRegItemName] = useState("");
  const [regQuantity, setRegQuantity] = useState(0);
  const [regPrice, setRegPrice] = useState(0);
  const [regCategory, setRegCategory] = useState("");

  const [addStockItemName, setAddStockItemName] = useState("");
  const [addStockQuantity, setAddStockQuantity] = useState(0);

  const [deleteItemName, setDeleteItemName] = useState("");

  const handleRegister = () => {
    const categoryMap = {
      clothing: "의류",
      electronics: "전자기기",
      cosmetics: "화장품",
      food: "식품",
    };

    const categoryName = categoryMap[regCategory] || "";

    const newItem = {
      id: Date.now(),
      itemName: regItemName,
      price: Number(regPrice),
      quantity: Number(regQuantity),
    };

    console.log(newItem);
    console.log(
      `${regItemName} ${regQuantity} ${regPrice} ${categoryName} 가 등록되었습니다.`,
    );
  };

  const handleAddStock = () => {
    console.log(`${addStockItemName} ${addStockQuantity} 가 추가되었습니다.`);
  };

  const handleDelete = () => {
    console.log(`${deleteItemName} 가 삭제되었습니다.`);
  };

  return (
    <div className="main-page">
      <div className="admin-content">
        <div className="admin-section">
          <div className="admin-section-title">상품 등록</div>
          <div className="admin-card">
            <div className="admin-row">
              <div className="admin-input-group">
                <span className="admin-label">상품명</span>
                <input
                  type="text"
                  className="admin-input"
                  placeholder="상품명 입력..."
                  value={regItemName}
                  onChange={(e) => setRegItemName(e.target.value)}
                />
              </div>
              <div className="admin-input-group">
                <span className="admin-label">수량</span>
                <input
                  type="number"
                  className="admin-input"
                  value={regQuantity}
                  onChange={(e) => setRegQuantity(e.target.value)}
                  min={0}
                />
              </div>
            </div>
            <div className="admin-row">
              <div className="admin-input-group">
                <span className="admin-label">가격</span>
                <input
                  type="number"
                  className="admin-input"
                  value={regPrice}
                  onChange={(e) => setRegPrice(e.target.value)}
                  min={0}
                />
              </div>
              <div className="admin-input-group">
                <span className="admin-label">카테고리</span>
                <select
                  className="admin-select"
                  value={regCategory}
                  onChange={(e) => setRegCategory(e.target.value)}>
                  <option value="" disabled hidden>
                    카테고리 선택
                  </option>
                  <option value="clothing">의류</option>
                  <option value="electronics">전자기기</option>
                  <option value="cosmetics">화장품</option>
                  <option value="food">식품</option>
                </select>
              </div>
            </div>
            <div className="admin-footer">
              <span className="admin-notice">
                * 추가 기능을 카테고리로 설정한 경우에만 카테고리를
                이용해주세요.
              </span>
              <button className="admin-btn-blue" onClick={handleRegister}>
                등록
              </button>
            </div>
          </div>
        </div>

        <div className="admin-section">
          <div className="admin-section-title">재고 추가</div>
          <div className="admin-card">
            <div className="admin-row">
              <div className="admin-input-group">
                <span className="admin-label">상품명</span>
                <input
                  type="text"
                  className="admin-input"
                  placeholder="상품명 입력..."
                  value={addStockItemName}
                  onChange={(e) => setAddStockItemName(e.target.value)}
                />
              </div>
              <div className="admin-input-group">
                <span className="admin-label">수량</span>
                <input
                  type="number"
                  className="admin-input"
                  min={0}
                  value={addStockQuantity}
                  onChange={(e) => setAddStockQuantity(e.target.value)}
                />
              </div>
            </div>
            <div className="admin-footer-right">
              <button className="admin-btn-blue" onClick={handleAddStock}>
                추가
              </button>
            </div>
          </div>
        </div>

        <div className="admin-section">
          <div className="admin-section-title">상품 삭제</div>
          <div className="admin-card">
            <div className="admin-row">
              <div className="admin-input-group">
                <span className="admin-label">상품명</span>
                <input
                  type="text"
                  className="admin-input"
                  placeholder="상품명 입력..."
                  value={deleteItemName}
                  onChange={(e) => setDeleteItemName(e.target.value)}
                />
              </div>
            </div>
            <div className="admin-footer-right">
              <button className="admin-btn-red" onClick={handleDelete}>
                삭제
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
