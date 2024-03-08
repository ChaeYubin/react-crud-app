import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  total: 0,
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
      state.total -= action.payload.amount;
      state.list = state.list.filter((item) => item.id !== action.payload.id);
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
      state.list = initialState.list;
      state.total = initialState.total;
      //   state = initialState;
    },
  },
});

export const { add, remove, edit, clear } = accountSlice.actions;
export default accountSlice.reducer;
