import React,{useState } from "react";

function Todo(){
    
    const[task,setTask]=useState([]);
    const[newtask,setnewTask]=useState("");

    function handleinput(event){
        setnewTask(event.target.value);
    }

    function addtask(){

        if(newtask.trim()!==""){
            setTask(t => [...t, newtask]);
            setnewTask("");
        }
    }

    function dlttask(index){
        const updatetask = task.filter((_,i) => i!== index);
        setTask(updatetask);
    }

    function moveup(index){
        if(index>0){
            const updatetask = [...task];
            [updatetask[index], updatetask[index-1]]=[updatetask[index-1], updatetask[index]];

            setTask(updatetask);
        }
    }

    function movedown(index){
        if(index<task.length-1){
            const updatetask = [...task];
            [updatetask[index], updatetask[index+1]]=[updatetask[index+1], updatetask[index]];
            setTask(updatetask);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
            <input type="text" placeholder="Enter a Task" 
                   value={newtask} onChange={handleinput} />

            <button className="add-btn"
                onClick={addtask}> Add 
            </button>
        </div>

        <ol>
            {task.map((tasks,index) => 
            <li key={index}>
                <span className="text">{tasks}</span>
                <button className="dlt-btn" onClick={() => dlttask(index)}>
                    Delete
                </button>

                <button className="move-btn" onClick={() => moveup(index)}>
                    Up
                </button>

                <button className="move-btn" onClick={() => movedown(index)}>
                    Down
                </button>
            </li>  )}
        </ol>
        </div>
    );
}

export default Todo