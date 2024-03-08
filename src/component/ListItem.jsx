import React from "react";
import "./../styles/ListItem.css";
import { useDispatch } from "react-redux";
import { remove, selectItem, alert } from "./../redux/account";

function ListItem({ id, title, expenditure }) {
  const dispatch = useDispatch();

  const onClickEditButton = () => {
    dispatch(
      selectItem({ item: { id: id, title: title, amount: expenditure } })
    );
  };

  const onClickDeleteButton = () => {
    dispatch(remove({ id: id, amount: expenditure }));
    dispatch(
      alert({ show: true, alertMsg: "아이템이 삭제되었습니다.", color: "red" })
    );
  };

  return (
    <div className="list-item-container">
      <p className="title-text">{title}</p>
      <p className="expenditure-text">{expenditure}</p>
      <div className="buttons">
        <button onClick={onClickEditButton}>수정</button>
        <button onClick={onClickDeleteButton}>삭제</button>
      </div>
    </div>
  );
}

export default ListItem;
