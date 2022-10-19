import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteTodo, UpdateTodo } from "../redux/todo.slice";
const Home = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const handledelete = (id) => {
    dispatch(DeleteTodo(id));
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateTodo(form));
    setupdate(false);
    setform({ title: "" });
  };
  const handlechange = (e) => {
    setform({ ...form, title: e.target.value });
  };

  const [form, setform] = useState({ title: "" });
  const [update, setupdate] = useState(true);
  const handleupdate = (todo) => {
    setupdate(false);
    setform(todo);
  };
  return (
    <div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <div>{todo.id}</div>
            <div>{todo.title}</div>
            <div>{todo.status ? "don" : "not done"}</div>
            <button onClick={() => handledelete(todo.id)}>delet</button>
            <button onClick={() => handleupdate(todo)}>update</button>
          </div>
        ))}
      </div>
      <div>
        <form action="" onSubmit={handlesubmit}>
          <table>title</table>
          <input name={"title"} value={form.title} onChange={handlechange} />
          <button disabled={update} type={"submit"}>
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
