import AddToCart from "../AddToCart/AddToCart"
import Cart from "../Cart/Cart"
import CartProvider from "../Cart/CartProvider"

export default function App() {
  return (
    <CartProvider>
      <Cart />
      <br />
      <AddToCart item={{ id: 1000, name: "Cup" }}>Adicionar item</AddToCart>
    </CartProvider>
  )
}
