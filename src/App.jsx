import { useState } from "react";
import "./styles/App.css";
import { useSelector } from "react-redux";
import ExpenditureInput from "./component/ExpenditureInput";
import List from "./component/List";
import ClearButton from "./component/ClearButton";

function App() {
  const [selectedId, setSelectedId] = useState(null); // 현재 선택한 항목의 아이디
  const totalExpenditure = useSelector((state) => state.account.total);
  const list = useSelector((state) => state.account.list);

  return (
    <div className="App">
      <div>모달 컴포넌트</div>
      <h1>예산 계산기</h1>
      <div className="container">
        <ExpenditureInput />
        <List list={list} />
        <ClearButton />
      </div>
      <div className="footer">
        <h2>총 지출: {totalExpenditure}원</h2>
      </div>
    </div>
  );
}

export default App;
