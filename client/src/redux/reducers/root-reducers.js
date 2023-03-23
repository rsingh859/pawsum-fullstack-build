import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import userReducer from "./users.reducers";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
