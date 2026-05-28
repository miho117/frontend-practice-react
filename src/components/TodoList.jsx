import { useState, useEffect } from 'react';

function TodoList({handleClick, selectedTodoId, onLoadingChange}) {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

useEffect(() => {
    const fetchTodos = async() => {
        setLoading(true);
        onLoadingChange?.(true); // ローディング開始を通知
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
       setError(err.message);
       }finally{
       setLoading(false);
       onLoadingChange?.(false); //ローディング終了を通知
       }
    };

    fetchTodos();
},[]);

  if (error) {
    return <p>{error}</p>;
  }

    return(
        <div className="w-3/6 min-h-screen border-r border-gray-200 p-4 overflow-y-auto">
            <h1 className="text-3xl font-bold mb-8">Todo一覧</h1>

            {loading ? (<p>Loading...</p> //ローディング中に表示
             ) : (
            <ul className="space-y-4">
            {todos.map((todo) => {
                const isSelected = todo?.id === selectedTodoId;

                    return(
                        <li key={todo.id} className="p-4 bg-white shadow rounded flex items-center gap-4">
                            <p onClick={()=>handleClick(todo)} 
                            className={`cursor-pointer w-full transition-colors 
                            ${isSelected ? 'text-blue-500 font-bold' : 'text-black'}`}
                            >
                            {todo.title}</p>
                        </li>
                    );
                })}
            </ul>
            )}
        </div>
    );
};

export default TodoList;