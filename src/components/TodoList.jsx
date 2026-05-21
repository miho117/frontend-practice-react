import { useState } from 'react';
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

const fetchTodos = async() => {
    setLoading(true);
    setError(null);

    try {
       const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=10'
       );

       if(!response.ok){
        throw new Error('Todoの取得に失敗');
       }

       const data = await response.json();
       setTodos(data);
       }catch(err){
       setError(err.messege);
       }finally{
       setLoading(false);
       }
    };

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold">Todo一覧</h1>

            <button
              onClick={fetchTodos}
              disabled={loading}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {loading ? '読み込み中。。。' : '一覧を取得'}
            </button>

            {error && (
              <div className="p-4 bg-red-100 text-red-700 rounded mb-4">
                {error}
              </div>
            )}

            <ul className="space-y-4">
                {todos.map(todo => (
                    <li key={todo.id} className="p-4 bg-white shadow rounded flex item-center gap-4">
                        <p className="text-red-500">
                            <span className="text-2xl flex-shrink-0 cursor-pointer">
                                {todo.completed ? (
                                 <MdOutlineCheckBox className="text-red-500" />
                                ):(<MdOutlineCheckBoxOutlineBlank className="text-gray-400"/>) 
                                }</span></p>
                        <p className="text-black">{todo.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;