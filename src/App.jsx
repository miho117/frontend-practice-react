import {useAuth} from './context/AuthContext';
import LoginForm from './components/LoginForm';
import WelcomePage from './components/WelcomePage';

function App(){

  const {user} = useAuth();
  return (
    user ? <WelcomePage/> : <LoginForm/>
  );
}
export default App;