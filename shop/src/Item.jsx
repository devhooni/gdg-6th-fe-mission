function Item({ item }) {
  const itemName = item.itemName || item.productName || "상품명 없음";
  const price = item.price ?? item.productPrice ?? 0;
  const quantity = item.quantity ?? item.productAmount ?? 0;

  return (
    <div className="item-container">
      <div className="item-container-left">
        <div className="item-name">{itemName}</div>
        <div className="item-detail">
          <div className="item-price">{price.toLocaleString()}원</div>
          <div className="item-quantity">수량: {quantity}개</div>
        </div>
      </div>

      <div className="item-container-right">
        <select name="quantity" className="quantity-box" defaultValue="">
          <option value="" disabled hidden>
            개수 입력..
          </option>
          {Array.from({ length: quantity }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <div
          className="shop-in-btn"
          onClick={(e) => {
            e.currentTarget.style.backgroundColor = "gray";
            e.currentTarget.style.color = "white";
          }}>
          장바구니
        </div>
      </div>
    </div>
  );
}

export default Item;
