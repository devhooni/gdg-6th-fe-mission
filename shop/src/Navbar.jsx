function Navbar() {
  const nav = ["카테고리 필터링", "가격 범위 필터링", "상품 정렬"];
  return (
    <div className="navbar">
      <img src="gdg-favicon.svg" />
      <div className="category-box">
        {nav.map((item) => (
          <div>{item}</div>
        ))}
      </div>
      <div className="admin-box">관리자</div>
    </div>
  );
}

export default Navbar;
