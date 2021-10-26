import React from 'react';

let TodoItem = ({data, handleToggle,handleDelete}) => {
    return (
        <>
            <div className="m-4 text-center" >
                {data.map((e) => (
                    <div key={e.id}>
                        {e.title} : {e.status ? "Done" : "Not Done"}
                        
                        <button 
                            className="btn btn-danger m-2 px-4"
                            onClick={() => {
                            handleDelete(e.id)
                        }}>Del</button>

                        <button
                            className="btn btn-warning m-2 " 
                            onClick={() => {
                            handleToggle(e.id)
                    }
                            }>Status</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default TodoItem;