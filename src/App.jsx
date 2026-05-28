import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoDetail from './components/TodoDetail';

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isTodoListLoading, setIsTodoListLoading] = useState(false);

  const handleClick = (todo) => {
    setSelectedTodo(todo);
  };

  return (
    <div className="flex items-start justify-center min-h-screen">
      <TodoList
      handleClick = {handleClick}
      selectedTodoId = {selectedTodo?.id}
      onLoadingChange={setIsTodoListLoading}
      />
      {!isTodoListLoading && <TodoDetail todo={selectedTodo} />}
    </div>
  );
}
export default App;