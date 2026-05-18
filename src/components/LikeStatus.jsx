import { useState } from 'react';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

const LikeStatus = () => {
    const [count, setCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false); 

const handleClick = () => {
    if(isLiked){
        setCount(prev => prev - 1);
    }else{
        setCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
};

return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold">いいね</h1>
        <br></br>
        <button 
        onClick={handleClick}
        >
         <span>{isLiked ? (
         <IoMdHeart className="text-red-500 text-5xl" /> 
         ) : (
         <IoMdHeartEmpty className="text-black-400 text-5xl" />
         )}</span>
         <span className="text-black-400 text-3xl">{count}</span>
        </button>
    </div>
);
};

export default LikeStatus;