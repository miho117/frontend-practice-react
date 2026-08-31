import ToggleDemo from './components/ToggleDemo';

function App(){

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold">useToggle カスタムフック デモ</h1>

        <div className="app-container">
            <ToggleDemo />
        </div>
    </div>
  )}
export default App;
