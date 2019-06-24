
import React from 'react'
import ReactDOM from 'react-dom'
import 'todomvc-app-css/index.css'
import Header from './components/header/index.jsx'
import { TodosProvider } from './components/TodosProvider.jsx'

ReactDOM.render(
    <TodosProvider>
        <Header />
    </TodosProvider>,
  document.getElementById('app')
);