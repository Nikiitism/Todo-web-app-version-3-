import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./WelcomeMessage.module.css"

const WelcomeMEssage =()=>{

    const {todoItems} = useContext(TodoItemsContext);

    return (todoItems.length === 0 && <p className={styles.welcome}>Huraah!! You do not have any task. Enjoy Your Day!!</p>);
}

export default WelcomeMEssage;