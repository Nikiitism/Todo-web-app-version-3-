import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import './App.css';
import TodoItems from "./components/TodoItems";
// import { useState, useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";


function App() {

  
  return (

    <TodoItemsContextProvider>
      <center >

         <AppName></AppName>
          <AddTodo></AddTodo>
          <WelcomeMessage ></WelcomeMessage>
          <TodoItems></TodoItems>

      </center>
      </TodoItemsContextProvider>
  ); 
}

export default App;
 