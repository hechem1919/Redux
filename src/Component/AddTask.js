import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../js/action";

const AddTask = ({toggle,filter}) => {
  const [item, setItem] = useState("");
  const titleTask = (e) => {
    setItem(e.target.value);
  };
  const dispatch = useDispatch();
  const add=()=>{
    if(item!=="")
    {dispatch(addtask({ task: item, id: Math.random(), isDone: false }));
  setItem("")}
  else
  {alert("please enter a valid task") } }
  return (
    <div>
      <h1>aya ekteb chno t7eb </h1>
      <input type="text" placeholder="hot chno t7eb" onChange={titleTask} value={item}/>
      <button
        onClick={add}>
        Add Task{" "}
      </button>
      <button onClick={toggle}  >{filter?"DONE":"ALL TASK"}</button>
    </div>
  );
};

export default AddTask;
