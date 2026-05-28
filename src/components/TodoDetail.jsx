function TodoDetail({todo}) {
    console.log(todo);

    if (!todo) {
        return (
            <div className="w-2/6 p-4 text-2xl">
            <p>Todoをクリックして詳細を表示</p>
            </div>
        );
    }

    return(

      <div className="w-2/6 p-4">
          <h1 className="text-3xl font-bold mb-8">詳細</h1>
          <div className="p-4 bg-white shadow rounded">
              <p className="text-black">ID: {todo.id}</p>
              <p className="text-black">
              Status: {todo.completed ? "完了" : "未完了"}
              </p>
          </div>
      </div>
    );
};

export default TodoDetail;
