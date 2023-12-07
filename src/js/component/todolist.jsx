import React, { useEffect, useState } from "react";


export const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    const [hoverItem, setHoverItem] = useState(null)

    const handleChange = (event) => {
        setInputValue({
            label: event.target.value,
            done: false
        }
        );
    }

    const createNewUser = async () => {
        const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/laurascardozo", {
            method: "POST",
            body: JSON.stringify([]),
            headers: {
                "Content-Type": "Application/json"
            }
        })
        if (!response.ok) {
            console.log(response)
            const res = await response.json()
            console.log(res)

        }
        console.log(response)
        const res = await response.json()
        console.log(res)

    }

    const updateTodoList = async () => {

        const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/laurascardozo", {
            method: "PUT",
            body: JSON.stringify(todos),
            headers: {
                "Content-Type": "Application/json"
            }
        })
        if (!response.ok) {
            console.log(response)
            const res = await response.json()
            console.log(res)

        }
        console.log(response)
        const res = await response.json()
        console.log(res)

    }

    const getTodoList = async () => {
        try {
            const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/laurascardozo", {
                method: "GET",
                body: JSON.stringify(),
                headers: {
                    "Content-Type": "Application/json"
                }
            })
            if (!response.ok) {
                return false
            }
            const data = await response.json()
            setTodos(data)
            return true

        } catch (error) {
            console.log(error)
            return false
        }
    }

    useEffect(() => {
        createNewUser()
        getTodoList()

    }, [])

    useEffect(() => {
        updateTodoList()
    }, [todos])

    return (
        <div>

            <input
                id="todo-list"
                type="text"
                value={inputValue.label || ""}
                onChange={handleChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        setTodos(todos.concat(inputValue));
                        setInputValue("");
                    }
                }
                }>
            </input>
            <>
                {todos.length === 0 && "No things to do, add task"}
            </>

            {todos.map((item, index) => (
                <div
                    key={index}
                    onMouseEnter={() => setHoverItem(index)}
                    onMouseLeave={() => setHoverItem(null)}
                >


                    <i className="fa-regular fa-square-check"></i>

                    <span> {item.label} </span>

                    {hoverItem === index && <i className="fa-solid fa-trash p-20"
                        onClick={() =>
                            setTodos(todos.filter(
                                (todos, currentIndex) =>
                                    index != currentIndex
                            ))
                        }
                    ></i>}

                </div>
            ))}
            <div> {todos.length} tasks</div>
        </div>
    );

}




export default TodoList;