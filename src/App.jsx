import "./styles/App.css";
import { useSelector } from "react-redux";
import ExpenditureInput from "./component/ExpenditureInput";
import List from "./component/List";
import ClearButton from "./component/ClearButton";

function App() {
  const totalExpenditure = useSelector((state) => state.account.total);
  const list = useSelector((state) => state.account.list);
  const selectedItem = useSelector((state) => state.account.selectedItem);

  return (
    <div className="App">
      <div>모달 컴포넌트</div>
      <h1>예산 계산기</h1>
      <div className="container">
        <ExpenditureInput selectedItem={selectedItem} />
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
