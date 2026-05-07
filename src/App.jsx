import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';

function App() {
  const isLoggedIn = true;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-3xl font-bold">My App</h1>

      {isLoggedIn ? <LoggedIn /> : <LoggedOut />}

    </div>
  );
}
export default App;