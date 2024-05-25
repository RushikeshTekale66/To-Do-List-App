import { useState } from 'react';
import './App.css';
import TodoInput from './Components/TodoInput';
import TodoList from "./Components/TodoList"

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== '') {
      setListTodo([...listTodo, inputText]);
    }
  }
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  }
  return (
    <>
      <div className="main-container container bg-info">
        <TodoInput addList={addList} />
        <div className='mt-5 m-5'>
          <h1 className='app-heading mt-5'>Todo</h1><hr />
          {listTodo.map((listItem, i) => {
            return (
              <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;
