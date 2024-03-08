import React from "react";
import "./../styles/ListItem.css";

function ListItem({ id, title, expenditure }) {
  return (
    <div className="list-item-container">
      <p className="title-text">{title}</p>
      <p className="expenditure-text">{expenditure}</p>
      <div className="buttons">
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
}

export default ListItem;
