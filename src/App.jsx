import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const [selectedId, setSelectedId] = useState(null); // 현재 선택한 항목의 아이디
  const totalExpenditure = useSelector((state) => state.account.total);

  return (
    <div className="App">
      <div>모달 컴포넌트</div>
      <h1>예산 계산기</h1>
      <div className="container">
        <div>생성 컴포넌트</div>
        <div>제출 버튼 컴포넌트</div>
        <div>리스트 컴포넌트</div>
        <div>목록 삭제 컴포넌트</div>
      </div>
      <div className="footer">
        <h2>총 지출: {totalExpenditure}원</h2>
      </div>
    </div>
  );
}

export default App;
