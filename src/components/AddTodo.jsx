import { useState } from 'react';

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (inputValue.trim() === '') return;

    setTodos([...todos,inputValue]);
    setInputValue('');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       <h1 className="text-3xl font-bold">TODOリスト</h1>

       <div className="max-w-md mx-auto p-6 space-y-4">
          <div>
            <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="p-2 border rounded"
            placeholder="内容を入力してください"
            />
            <button 
            onClick={addTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >追加</button>
          </div>  
          
          <ul className="text-left space-y-2">
            {todos.map((todo,index) => (<li key={index}>{todo}</li>
          ))}
          </ul>

          {todos.length === 0 && (
          <p className="text-gray-500 text-center">Todoがありません</p>
          )}
       </div>
    </div>
  )
};
export default AddTodo;