import React from "react";
import "./../styles/ListItem.css";
import { useDispatch } from "react-redux";
import { remove, selectItem } from "./../redux/account";

function ListItem({ id, title, expenditure }) {
  const dispatch = useDispatch();

  const onClickEditButton = () => {
    dispatch(
      selectItem({ item: { id: id, title: title, amount: expenditure } })
    );
  };

  const onClickDeleteButton = () => {
    dispatch(remove({ id: id, amount: expenditure }));
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
