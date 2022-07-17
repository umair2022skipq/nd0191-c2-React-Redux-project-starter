import { configureStore } from "@reduxjs/toolkit";
import employeePollReducer from "../features/employeePoll/employeePollSlice";

export default configureStore({
  reducer: {
    poll: employeePollReducer,
  },
});
