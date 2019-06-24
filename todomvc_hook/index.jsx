import React from "react";
import ReactDOM from "react-dom";
import  "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import Header from "./components/header/index.jsx";
import Main from "./components/main/index.jsx";
import { TodosProvider } from "./components/TodosProvider.jsx";
import { FilterProvider } from "./components/FilterProvider.jsx";


ReactDOM.render(
  <TodosProvider>
    <Header />
    <FilterProvider>
      <Main />
    </FilterProvider>
  </TodosProvider>,
  document.getElementById("app")
);
