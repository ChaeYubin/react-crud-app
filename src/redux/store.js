import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./account.js";

export default configureStore({
  reducer: {
    account: accountReducer,
  },
});
