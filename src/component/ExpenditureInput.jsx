import React, { useState, useEffect } from "react";
import "./../styles/ExpenditureInput.css";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { add, alert, edit } from "../redux/account";

function ExpenditureInput({ selectedItem }) {
  const dispatch = useDispatch();

  const [titleInput, setTitleInput] = useState("");
  const [expenditureInput, setExpenditureInput] = useState(0);

  // 수정하려고 선택한 아이템이 있으면
  // 선택한 아이템의 제목과 비용을 input에 가져와 보여준다.
  useEffect(() => {
    if (selectedItem) {
      setTitleInput(selectedItem.title);
      setExpenditureInput(selectedItem.amount);
    }
  }, [selectedItem]);

  const onTitleChange = (e) => {
    setTitleInput(e.target.value);
  };

  const onExpenditureChange = (e) => {
    setExpenditureInput(e.target.value);
  };

  const onClickSubmitButton = (e) => {
    if (titleInput === "" || expenditureInput === 0) {
      alert("모든 항목을 올바르게 입력해주세요.");
      return;
    }

    e.preventDefault();
    setTitleInput("");
    setExpenditureInput(0);

    const newItem = {
      id: uuid(),
      title: titleInput,
      amount: Number(expenditureInput),
    };

    dispatch(add({ item: newItem }));
    dispatch(
      alert({
        show: true,
        alertMsg: "아이템이 생성되었습니다.",
        color: "green",
      })
    );
  };

  const onClickEditButton = (e) => {
    e.preventDefault();

    dispatch(
      edit({
        item: {
          id: selectedItem.id,
          title: titleInput,
          amount: Number(expenditureInput),
        },
      })
    );

    dispatch(
      alert({
        show: true,
        alertMsg: "아이템이 수정되었습니다.",
        color: "green",
      })
    );

    setTitleInput("");
    setExpenditureInput(0);
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
      {selectedItem == null ? (
        <button onClick={onClickSubmitButton}>제출</button>
      ) : (
        <button onClick={onClickEditButton}>수정</button>
      )}
    </div>
  );
}

export default ExpenditureInput;
