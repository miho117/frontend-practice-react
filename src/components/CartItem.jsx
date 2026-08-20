import { BsTrash3 } from "react-icons/bs";

const CartItem = ({ item, onUpdateQuantity, onDeleteItem }) => {
  return (
    <li key={item.id} className="p-4 bg-white shadow rounded grid grid-cols-[1fr_auto] items-center gap-6">
        <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm">¥{item.price.toLocaleString()}</p>
        </div>
        <div className="flex items-center gap-3">
            <div className="flex items-center border rounded">
                {/* 数量変更ボタン*/}
                <button
                  onClick={() => onUpdateQuantity(item.id, item.qty - 1)}
                  className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-white-700 rounded-l transition"
                >
                 -
                </button>
                <span className="px-3 py-1 text-sm font-medium">{item.qty}</span>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.qty + 1)}
                  className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-white-700 rounded-r transition"
                >
                 +
                </button>
            </div>
            
            {/* 削除ボタン */}
            <button  
              onClick={() => onDeleteItem(item.id)}
              className="p-2 text-gray-500 hover:bg-gray-50 rounded transition"
              title="削除"
            ><BsTrash3 />
            </button>
        </div>

    </li>
  );
};

export default CartItem;