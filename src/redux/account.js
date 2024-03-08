import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [{ id: 0, title: "샘플", amount: 1500 }],
  total: 1500,
};

export const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload.item);
      state.total += action.payload.item.amount;
    },
    remove: (state, action) => {
      state.list = state.list.filter(
        (item) => item.id !== action.payload.item.id
      );
      state.total -= action.payload.item.amount;
    },
    edit: (state, action) => {
      state.list = state.list.map((item) => {
        if (item.id === action.payload.item.id) {
          state.total -= item.amount; // 기존 금액을 빼고
          state.total += action.payload.item.amount; // 업데이트된 금액을 더한다.
          return action.payload.item;
        } else {
          return item;
        }
      });
    },
    clear: (state) => {
      state = initialState;
    },
  },
});

export const { add, remove, edit, clear } = accountSlice.actions;
export default accountSlice.reducer;
