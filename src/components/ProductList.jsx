import { BsCart4 } from "react-icons/bs";

const ProductList = ({products, onAddCart, onMoveCart}) => {
    const qty = 0;

const addCart = (item) => {
    onAddCart(item);
    alert(`${item.name}をカートに追加しました！`);
};

const moveCart = () => {
    onMoveCart();
};


return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-8">商品LIST</h1>
            <div >
                <ul className="space-y-4">
                    {products.map((item) => {

                    return(
                        <li key={item.id} className="p-4 bg-white shadow rounded grid grid-cols-[1fr_auto] items-center gap-6">
                            <div className="flex flex-col items-start gap-1">
                              <span className="font-semibold text-gray-800">{item.name}</span>
                              <span className="text-sm text-gray-500">¥{item.price.toLocaleString()}</span>
                            </div>
                            <button 
                            onClick={()=>addCart(item)}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            ><span className="flex items-center gap-2"><BsCart4 className="text-white"/>カートへ追加</span>
                            </button> 
                        </li>
                    );
                })}
                </ul>
            </div>
            
            <div>
                <button 
                onClick={moveCart}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 flex flex-col gap-4 mt-8"
                ><span className="flex items-center gap-2"><BsCart4 className="text-white"/>カートへ移動</span>
                </button>
            </div>
    </div>
);
};

export default ProductList;