import CartItem from './CartItem';
import CartTotal from './CartTotal';

const Cart = ({cart, onBack, onUpdateQuantity, onDeleteItem, onClearCart}) => {
    const totalPrice = cart.reduce((acc,item) => acc + item.price * item.qty, 0);

return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">ショッピングカート</h1>
            {cart.length === 0 ? (
                <div className="text-center">
                  <p className="text-gray-500 text-lg mb-6">カートは空です</p>
                  <button 
                  onClick={onBack}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    商品LISTへ戻る
                  </button>
                </div>
            ):(
                <div>
                    <ul className="divide-y divide-gray-200 mb-6">
                        {cart.map((item) => (
                          <CartItem
                           key={item.id}
                           item={item}
                           onUpdateQuantity={onUpdateQuantity}
                           onDeleteItem={onDeleteItem}
                          />
                        ))}
                    </ul>

                    <CartTotal
                     totalPrice={totalPrice}
                     onBack={onBack}
                     onClearCart={onClearCart}
                    />
                </div>
            )}
    </div>
);
};

export default Cart;