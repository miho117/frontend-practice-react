import {useAuth} from '../context/AuthContext';
import {useState} from 'react';

function LoginForm(){

  const [name, setName] = useState('');
  const {login} = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       <h1 className="text-3xl font-bold">Login画面</h1>

       <div className="max-w-md mx-auto p-6 space-y-4">
          <div>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded"
            placeholder="名前の入力"
            />
            <button 
            onClick={() => login(name)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >LOGIN</button>
          </div>
       </div>
    </div>
  );
}
export default LoginForm;