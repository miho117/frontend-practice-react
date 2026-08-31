import { useState } from 'react';
import { useToggle } from '../hooks/useToggle';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

function ToggleDemo() {
    const [password, setPassWord] = useState('');
    const {value: isShow, toggle} = useToggle(false);
    const {value: isOpen, setTrue: openModal, setFalse: closeModal} = useToggle(false);


  return (
    <div className="flex flex-col items-center mt-16 min-h-screen bg-gray-100">
       <h1 className="text-3xl font-bold">1.Password入力画面</h1>

       {/* --- パスワード入力エリア --- */}
       <div className="max-w-md mx-auto p-6 space-y-4">
          <div>
            <input
            type={isShow ? "text" : "password"}
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
            className="p-2 border rounded"
            placeholder="passwordを入力"
            />
            <button 
            onClick={toggle}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
            {isShow ? <IoMdEye /> : <IoMdEyeOff />}
            </button>
          </div>
       </div>
      
      {/* --- モーダル表示エリア --- */}
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold">2.モーダル操作"</h1>
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-medium"
        >
          モーダルを開く
        </button>
      </div>

      {/* --- モーダル本体（isOpen が true の時だけ表示） --- */}
      {isOpen && (
        <div class="text-center bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800">確認モーダル</h3>
            <p className="text-gray-600">
              `useToggle` の `setTrue` と `setFalse` を使って制御されているモーダルです。
            </p>
            
            <button
              type="button"
              onClick={closeModal}
              className="py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 font-medium"
            >
              閉じる
            </button>
        </div>
      )}
    </div>
  );
}

export default ToggleDemo;


