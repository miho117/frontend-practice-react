const CartTotal = ({ totalPrice, onBack, onClearCart }) => {
  return (
    <div className="border-t pt-4">
        {/* 合計金額表示 */}
        <div className="flex justify-between items-center text-lg font-bold mb-6">
          <span>合計金額:</span>
          <span className="text-xl">
            ¥{totalPrice.toLocaleString()}
          </span>
        </div>

        {/* アクションボタン群 */}
        <div className="flex justify-between gap-4">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition flex-1"
          >
           買い物を続ける
          </button>
          <button
            onClick={onClearCart}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
           カートを空にする
          </button>
        </div>
    </div>
  );
};

export default CartTotal;