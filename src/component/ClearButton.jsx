import React from "react";
import { useDispatch } from "react-redux";
import { clear } from "../redux/account";

function ClearButton() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(clear());
  };

  return <button onClick={onClick}>목록 지우기</button>;
}

export default ClearButton;
