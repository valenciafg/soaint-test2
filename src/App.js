
import AppMenu from './Components/AppMenu';
import ProductList from './Components/ProductList';
import { CartProvider, useCart } from './Context/cart-context';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppMenu />
      <ProductList />
    </div>
  );
}

export default () => <CartProvider>
  <App></App>
</CartProvider>;
