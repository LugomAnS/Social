import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import store, { StateType } from "./redux/state";

let rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(<App state={state} dispatch={(action) => store.dispatch(action) } />, document.getElementById("root"));
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

