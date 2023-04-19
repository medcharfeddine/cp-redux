import { legacy_createStore as createStore } from "redux";
import todoReducer from "./todoReducer";

const store = createStore(todoReducer);

export default store;
