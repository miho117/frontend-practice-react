import { useReducer, useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const initialState = [];

function addReducer(state,action){
  switch(action.type){
    case 'ADD_ITEM':
      const existing = state.find(item => item.id === action.payload.id);
      if(existing) {
        return state.map(item =>
        item.id === action.payload.id
          ? {...item, qty:item.qty + action.payload.qty }
          : item 
        );
      }
      return[...state, {...action.payload, qty: 1}];
    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.payload);
    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id
          ? {...item, qty:action.payload.qty }
          : item 
        );
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

function App(){
    // テストデータ
    const productsData = [
        { id:1, name: '食器', price: 1600 },
        { id:2, name: 'ぬいぐるみ', price: 1540 },
        { id:3, name: 'ダイニングテーブル', price: 224560 },
        { id:4, name: 'Tシャツ', price: 1100 },
        { id:5, name: 'ダイニングチェア', price: 23400 }
    ];

    const [cart, dispatch] = useReducer(addReducer, initialState);
    const [page, setPage] = useState('list');

    const handleAddCart = (product) => {
        dispatch({type:'ADD_ITEM',payload: {...product, qty: 1}});
        };

    const handleDeleteItem = (id) => {
        dispatch({ type: 'DELETE_ITEM', payload: id });
        };

    const handleUpdateQuantity = (id, qty) => {
      if (qty <= 0) {
      handleDeleteItem(id);
      return;
      }

      dispatch({type:'UPDATE_QUANTITY',payload: {id, qty}});
      };

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
        };

  return (
    <div className="app-container">
        {page === 'list' ? (
            <ProductList 
             products={productsData}
             onAddCart={handleAddCart}
             onMoveCart={() => setPage('cart')}
             />
        ):(
            <Cart
             cart={cart} 
             onDeleteItem={handleDeleteItem}
             onUpdateQuantity={handleUpdateQuantity}
             onClearCart={handleClearCart}
             onBack={() => setPage('list')} // 商品一覧に戻るボタン用
            />
        )}
    </div>
  )}
export default App;
