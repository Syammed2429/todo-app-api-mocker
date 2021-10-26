import React from 'react';
// import {nanoid} from 'nanoid';
import TodoItem from './TodoItem';



let TodoInput = () => {
    const [input, setInput] = React.useState("")
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(1);

    const handleToggle = (id) => {
        const updatedList =  data.map(e => {
            if(e.id === id) {
                e.status = !e.status;
            }
            return e;
        })
        setData(updatedList)
    }


    const handleDelete = (id) => {
        let updatedList = data.filter((e) => e.id !== id);
        setData(updatedList)

    }

    const getData = async () => {
        const response = await fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`);
        const result = await response.json();
        setData(result)

    }
    React.useEffect(() => {
        getData()
    },[page]);


    const handleAddTodo = () => {
        fetch(`http://localhost:3001/todos`, {
            method : "POST",
            body : JSON.stringify({
                title : input,
                status : false
            }),
            headers : {
                "Content-Type" : "application/json",
            }
        }).then(getData)
        setInput("")
    }
    return (
        <>
            <input
                className="form-control container col-3 my-2"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value)
                }}
                type="text" 
                placeholder="Enter your list"/>

            <button 
                className="btn btn-success col-3"
                onClick={handleAddTodo}>
            Add Todo</button>

            <TodoItem 
                className="col-3"
                data={data} 
                handleToggle={handleToggle}
                handleDelete={handleDelete}
            
            />
            <button
                className="btn btn-secondary mr-5" 
                onClick={() => {
                setPage(page - 1)
            }}>Prev</button>

            <button 
                className="btn btn-info ml-5" 
                onClick={() => {
                setPage(page + 1)
            }}>Next</button>

        </>
    );
}

export default TodoInput;