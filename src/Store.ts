import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV !== "production",
});

export default wrapper;
