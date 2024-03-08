import React from "react";
import "./../styles/ListItem.css";
import { useDispatch } from "react-redux";
import { remove } from "./../redux/account";

function ListItem({ id, title, expenditure }) {
  const dispatch = useDispatch();

  const onClickDeleteButton = () => {
    dispatch(remove({ id: id, amount: expenditure }));
  };

  return (
    <div className="list-item-container">
      <p className="title-text">{title}</p>
      <p className="expenditure-text">{expenditure}</p>
      <div className="buttons">
        <button>수정</button>
        <button onClick={onClickDeleteButton}>삭제</button>
      </div>
    </div>
  );
}

export default ListItem;
