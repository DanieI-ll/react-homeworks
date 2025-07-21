import Greeting from '../Greeting/Greeting.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import OrderStatus from '../OrderStatus/OrderStatus.jsx';
import './App.css';

function App() {
  const shoppingItems = ['Bread', 'Milk', 'Eggs'];
  const orders = [
    { orderId: 123, status: 'в пути' },
    { orderId: 241, status: 'обработан' },
    { orderId: 324, status: 'доставлен' },
  ];

  return (
    <>
      <Greeting name="Daniel" />
      <ShoppingList items={shoppingItems} />
      {orders.map((order) => (
        <OrderStatus orderId={order.orderId} status={order.status} />
      ))}
    </>
  );
}

export default App;
