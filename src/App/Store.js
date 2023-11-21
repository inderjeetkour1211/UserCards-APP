import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Feature/UserSlice";
const store = configureStore({
  reducer: {
    users: usersReducer,
  }
});

export default store;
