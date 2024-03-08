import "./styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import ExpenditureInput from "./component/ExpenditureInput";
import List from "./component/List";
import ClearButton from "./component/ClearButton";
import Modal from "./component/Modal";
import { alert } from "./redux/account";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const totalExpenditure = useSelector((state) => state.account.total);
  const list = useSelector((state) => state.account.list);
  const selectedItem = useSelector((state) => state.account.selectedItem);

  const alertModal = useSelector((state) => state.account.alert);
  // alertModal.show 상태가 바뀌면(true가 되어 모달이 보이면) 2초 뒤 show: false로 바꾸어 모달이 보이지 않게 한다.
  useEffect(() => {
    if (alertModal.show) {
      setTimeout(() => {
        dispatch(alert({ show: false, alertMsg: "", alertColor: "" }));
      }, 2000);
    }
  }, [alertModal.show]);

  return (
    <div className="App">
      {alertModal.show ? (
        <Modal message={alertModal.alertMsg} color={alertModal.color} />
      ) : null}
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
