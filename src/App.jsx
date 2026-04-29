function App() {
  const name = "太郎";
  const year = 2026;
  const isLoggedIn = true;
  const isDone = false;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <p>Hello, {name}!</p>
      <p>現在： {year}年</p>

      {isLoggedIn ? 
        (<p className="text-green-500">ログイン中</p>) : (<p className="text-red-500">未ログイン</p>) 
      }

      {isDone ?
        (<p className="text-green-500">done</p>) : (<p className="text-yellow-500">not yet</p>) 
      }

    </div>
  );
}

export default App;