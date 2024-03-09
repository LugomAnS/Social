import { combineReducers, createStore } from "redux";
import { postsReducers } from "./posts/reducer";
import { dialogReducer } from "./dialogs/reducer";

const reducers = combineReducers({
  postsPage: postsReducers,
  dialogPage: dialogReducer,
});

const store = createStore(reducers);

export type StoreStateType = ReturnType<typeof reducers>;

export default store;