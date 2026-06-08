import {useAuth} from '../context/AuthContext';

function WelcomePage(){

  const {user, logout} = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       <h1 className="text-3xl font-bold">WelcomePage</h1>

       <div className="max-w-md mx-auto p-6 space-y-4">
            <h1 className="font-bold">ようこそ{user.name}さん‼</h1>
       </div>
           <div>
               <button 
               onClick={logout}
               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
               >LOGOUT</button>
            </div>
    </div>
  );
}
export default WelcomePage;