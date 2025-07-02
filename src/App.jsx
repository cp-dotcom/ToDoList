import './App.css'
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [newlist, setNewlist] = useState("");

  function input(e) {
    setNewlist(e.target.value);
  }
function add() {
    if (newlist.trim() !== "") {
      setList((a) => [...a, newlist]);
      setNewlist("");
    }
  }
  function Delete(index) {
    const res = list.filter((_, ind) => ind !== index);
    setList(res);
  }


  return(
    <div style={{ background: "lightyellow" ,padding: "20px" ,minHeight: "100vh"}} >
   
     <div >
      <h1 style={{ textAlign: "center" }} className='todo'>ToDo List</h1>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>

         <input
          type="text"
          placeholder="Enter a task"
          value={newlist}
          onChange={input}
          style={{ width: "250px", height: "30px",borderRadius:"30px" }}
        />

        <button
          onClick={add}
          style={{ marginLeft: "10px", height: "34px",width:"70px",bordrRadius:"30px",borderRadius:"30px" }}>
          Add
        </button>

      </div>
         
        {list.map((x, y) => (
          <li key={y} style={{ marginBottom: "10px", textAlign: "center" }}>
            <span style={{ marginRight: "10px" }}>{x}</span>
            <button onClick={() => Delete(y)}>Delete</button>
          </li>
        ))}
      
    </div>
     </div>
  );
}
export default App