import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: { list: [{ id: 0, title: "밥먹기", amount: 1200 }], total: 0 },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload.item);
      state.total += action.payload.amount;
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
      state.list = [];
      state.total = 0;
    },
  },
});

export const { add, remove, edit, clear } = accountSlice.actions;
export default accountSlice.reducer;
