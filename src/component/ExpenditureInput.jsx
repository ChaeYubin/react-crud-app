import React, { useState } from "react";
import "./../styles/ExpenditureInput.css";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { add } from "../redux/account";

function ExpenditureInput() {
  const dispatch = useDispatch();
  const [titleInput, setTitleInput] = useState("");
  const [expenditureInput, setExpenditureInput] = useState(0);

  const onTitleChange = (e) => {
    setTitleInput(e.target.value);
  };

  const onExpenditureChange = (e) => {
    setExpenditureInput(e.target.value);
  };

  const onClick = (e) => {
    if (titleInput === "" || expenditureInput === 0) {
      alert("모든 항목을 잘 입력해주세요.");
      return;
    }

    e.preventDefault();
    console.log("submit button clicked");
    setTitleInput("");
    setExpenditureInput(0);

    const newItem = {
      id: uuid(),
      title: titleInput,
      amount: Number(expenditureInput),
    };

    dispatch(add({ item: newItem }));
  };

  return (
    <div className="input-container">
      <div className="items">
        <div className="item">
          <p>지출 항목</p>
          <input type="text" value={titleInput} onChange={onTitleChange} />
        </div>
        <div className="item">
          <p>비용</p>
          <input
            type="number"
            value={expenditureInput}
            onChange={onExpenditureChange}
          />
        </div>
      </div>
      <button onClick={onClick}>제출</button>
    </div>
  );
}

export default ExpenditureInput;
