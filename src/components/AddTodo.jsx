import { useContext, useRef, useState } from "react";
import styles from "./AddTodo.module.css"
import { IoAddCircleSharp } from "react-icons/io5";
import { TodoItemsContext } from "../store/todo-items-store";


function AddTodo(){

  const {addNewItem} = useContext(TodoItemsContext);

  const [error, setError] = useState('');
  const todoNameElement = useRef();
  const dueDateElement = useRef();


  const handleAddButtonClicked = (event) => {

      event.preventDefault();
      const todoName = todoNameElement.current.value;
      const dueDate = dueDateElement.current.value;
      
    if (todoName && dueDate) {
      todoNameElement.current.value = "";
      dueDateElement.current.value = "";
      console.log(`Work to do on ${dueDate} :  ${todoName}`);
      addNewItem(todoName, dueDate);
      setError("");
    } 
    else {
      setError("Please fill in both fields."); 
    }
  };
  

    return (
        <div className={`container ${styles.itemsContainer}`}>
          <form onSubmit={handleAddButtonClicked} className="row kg-row ">

            <div className="col-6"><input type="text" placeholder="Enter Todo here" ref={todoNameElement} ></input></div>

            <div className="col-4"><input type="date"ref={dueDateElement} ></input></div>

            <div className="col-2">
              <button type="submit" className="btn btn-success kg-button"> <IoAddCircleSharp size={20} /> </button> 
              {error && <div style={{ color: 'red' }}>{error}</div>}
            </div>

          </form>
          </div>
    );
}

export default AddTodo;