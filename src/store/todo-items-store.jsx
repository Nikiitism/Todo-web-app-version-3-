import { createContext, useReducer, useState } from "react";

export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {}
});



const todoItemReducer = (currTodoItems, action) =>{

  let newTodoItems = currTodoItems;
  if(action.type === 'NEW_item')
  {
    newTodoItems = [...currTodoItems, {name:action.payload.itemName, dueDate: action.payload.itemDueDate}];
  }
  else if(action.type === 'DELETE_item'){

    newTodoItems = currTodoItems.filter ((item)=>  item.name !== action.payload.itemName)
  }
  return newTodoItems;
}



const TodoItemsContextProvider = ({children}) => {

    // const initialTodoItems =[];

    // const [todoItems, setTodoItems] = useState(initialTodoItems);
    const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer,[]);
  
    const addNewItem = (itemName, itemDueDate)=>
    {
      const newItemAction = {
        type: "NEW_item",
        payload: {
          itemName,
          itemDueDate
        }
      }
      dispatchTodoItems(newItemAction)
  
    //   setTodoItems((currVal) =>{
    //   const newTodoItems = [...currVal, {name:itemName, dueDate: itemDueDate}];
    //   return newTodoItems;
    //   });
    //   console.log(`New item added: ${itemName} date:${itemDueDate}`);
    }
  
    const deleteItem =(todoItemName)=>{
      const deleteItemAction = {
        type: "DELETE_item",
        payload: {
          itemName: todoItemName
        }
      }
      dispatchTodoItems(deleteItemAction)
  
    //   const newTodoItems = todoItems.filter ((item)=> item.name !== todoItemName)
    //   setTodoItems(newTodoItems);
    //   console.log(`Item deleted: ${todoItemName}`);
    }

    return (<TodoItemsContext.Provider value={{
        todoItems,
        addNewItem,
        deleteItem
        }}>
       {children}
     </TodoItemsContext.Provider>)
}

export default TodoItemsContextProvider;
