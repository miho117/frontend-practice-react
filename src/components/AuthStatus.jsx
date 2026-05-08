const AuthStatus = ({isLoggedIn}) => {
    return(
    isLoggedIn ? 
    <p className="text-green-500">ログインしています</p> : <p className="text-red-500">ログインしていません</p>
    );
};
export default AuthStatus;