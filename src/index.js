import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import reducers from "./reducers";
import SongList from "./components/SongList"

ReactDOM.render(
    // the 'store' is going to be the result of calling 
    // 'createStore' and passing in our reducers
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// ReactDOM.render(<App />, document.querySelector("#root"));
