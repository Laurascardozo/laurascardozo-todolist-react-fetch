import React, {useState} from "react";


const TodoList = () => {
    const [inputValue, setInputValue]  = useState ("");
    const [todos, setTodos] = useState([]);  

    const handleChange = (event) => {
        setInputValue(event.target.value);
      }

    return (
        <div>
            <input 
             id="todo-list"
             type="text"
             placeholder="No things to do, add task" 
             value={inputValue} 
             onChange={handleChange}
             onKeyDown= {(e) =>{
                if(e.key === 'Enter'){ 
                 setTodos(todos.concat(inputValue));
                 setInputValue("");
                 }
             }
             }>
            </input>
            {todos.map((item,index) => (
				<div>
                    <i className="fa-regular fa-square-check"></i>
                    
                   <span> {item}{""} </span> 
		
                    <i className="fa-solid fa-trash p-20"
                        onClick={()=>
                            setTodos(todos.filter(
                                (item,currentIndex) =>
                                    index != currentIndex
                                        ))
                    }></i>
                
				</div>
			))}
            <div> {todos.length} task</div>
        </div>  
    );
}





export default TodoList;