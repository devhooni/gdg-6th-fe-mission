import { useState } from "react";
import AdminSection from "./components/AdminSection.jsx";
import AdminCard from "./components/AdminCard.jsx";
import AdminInputGroup from "./components/AdminInputGroup.jsx";

function AdminPage() {
  // 1. 상품 등록 상태 관리
  const [regItemName, setRegItemName] = useState("");
  const [regQuantity, setRegQuantity] = useState(0);
  const [regPrice, setRegPrice] = useState(0);

  // 2. 재고 추가 상태 관리
  const [addStockItemName, setAddStockItemName] = useState("");
  const [addStockQuantity, setAddStockQuantity] = useState(0);

  // 3. 상품 삭제 상태 관리
  const [deleteItemName, setDeleteItemName] = useState("");

  // 숫자 변환 헬퍼 함수
  const parseNumber = (value) => Number(value) || 0;

  // [POST] 상품 등록 함수
  const handleRegister = async () => {
    if (!regItemName.trim()) {
      alert("상품명을 입력해주세요.");
      return;
    }

    const productData = {
      ProductName: regItemName,
      ProductStock: parseNumber(regQuantity),
      ProductPrice: parseNumber(regPrice),
    };

    try {
      await fetch("http://192.168.196.188:8080/api/admin/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // 서버가 JSON을 읽을 수 있도록 헤더 명시
        },
        body: JSON.stringify(productData),
      });

      alert(`${regItemName} (${regQuantity}개, ${regPrice}원) 등록 성공!`);

      // 등록 성공 후 입력 필드 초기화
      setRegItemName("");
      setRegQuantity(0);
      setRegPrice(0);
    } catch (error) {
      console.error("실패:", error);
      alert(
        "서버 전송 중 오류가 발생했습니다. (CORS 또는 네트워크 연결을 확인하세요)",
      );
    }
  };

  // [기능 구현용] 재고 추가 함수
  const handleAddStock = async () => {
    try {
      const response = await fetch(
        `http://192.168.196.188:8080/api/admin/products/${addStockItemName}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: addStockQuantity,
        },
      );

      if (!response.ok) {
        throw new Error("재고 추가 실패");
      }

      alert(`${addStockItemName} (${addStockQuantity}개) 재고 추가 성공!`);

      // 입력 필드 초기화
      setAddStockItemName("");
      setAddStockQuantity(0);

      console.log(
        `${addStockItemName} ${addStockQuantity}개가 추가되었습니다.`,
      );
    } catch (error) {
      console.error("실패:", error);

      alert(
        "서버 전송 중 오류가 발생했습니다. (CORS 또는 네트워크 연결을 확인하세요)",
      );
    }
  };

  // [기능 구현용] 상품 삭제 함수
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://192.168.196.188:8080/api/admin/products/delete`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([deleteItemName]),
        },
      );

      if (!response.ok) {
        throw new Error("상품 삭제 실패");
      }

      alert(`${deleteItemName} 가 삭제되었습니다.`);

      // 입력 필드 초기화
      setDeleteItemName("");
    } catch (error) {
      console.error("실패:", error);

      alert(
        "서버 전송 중 오류가 발생했습니다. (CORS 또는 네트워크 연결을 확인하세요)",
      );
    }
  };

  return (
    <div className="main-page">
      <div className="admin-content">
        {/* 1. 상품 등록 섹션 */}
        <AdminSection title="상품 등록">
          <AdminCard>
            <div className="admin-row">
              <AdminInputGroup label="상품명">
                <input
                  type="text"
                  className="admin-input"
                  placeholder="상품명 입력..."
                  value={regItemName}
                  onChange={(e) => setRegItemName(e.target.value)}
                />
              </AdminInputGroup>
              <AdminInputGroup label="수량">
                <input
                  type="number"
                  className="admin-input"
                  min={0}
                  value={regQuantity}
                  onChange={(e) => setRegQuantity(e.target.value)}
                />
              </AdminInputGroup>
            </div>
            <div className="admin-row">
              <AdminInputGroup label="가격">
                <input
                  type="number"
                  className="admin-input"
                  min={0}
                  value={regPrice}
                  onChange={(e) => setRegPrice(e.target.value)}
                />
              </AdminInputGroup>
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
          </AdminCard>
        </AdminSection>

        {/* 2. 재고 추가 섹션 */}
        <AdminSection title="재고 추가">
          <AdminCard>
            <div className="admin-row">
              <AdminInputGroup label="상품명">
                <input
                  type="text"
                  className="admin-input"
                  placeholder="상품명 입력..."
                  value={addStockItemName}
                  onChange={(e) => setAddStockItemName(e.target.value)}
                />
              </AdminInputGroup>
              <AdminInputGroup label="수량">
                <input
                  type="number"
                  className="admin-input"
                  min={0}
                  value={addStockQuantity}
                  onChange={(e) => setAddStockQuantity(e.target.value)}
                />
              </AdminInputGroup>
            </div>
            <div className="admin-footer-right">
              <button className="admin-btn-blue" onClick={handleAddStock}>
                추가
              </button>
            </div>
          </AdminCard>
        </AdminSection>

        {/* 3. 상품 삭제 섹션 */}
        <AdminSection title="상품 삭제">
          <AdminCard>
            <div className="admin-row">
              <AdminInputGroup label="상품명">
                <input
                  type="text"
                  className="admin-input"
                  placeholder="상품명 입력..."
                  value={deleteItemName}
                  onChange={(e) => setDeleteItemName(e.target.value)}
                />
              </AdminInputGroup>
            </div>
            <div className="admin-footer-right">
              <button className="admin-btn-red" onClick={handleDelete}>
                삭제
              </button>
            </div>
          </AdminCard>
        </AdminSection>
      </div>
    </div>
  );
}

export default AdminPage;
