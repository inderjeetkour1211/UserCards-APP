import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./App/Store";
import UserCards from "./Components/UserCards";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1 style={{ textAlign: "center" }}>User Cards App</h1>
        <UserCards />
      </div>
    </Provider>
  );
};

export default App;
