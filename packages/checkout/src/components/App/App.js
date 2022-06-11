import { AddToCart } from "../AddToCart"
import { Cart, CartProvider } from "../Cart"

export function App() {
  return (
    <CartProvider>
      <p>
        <Cart />
      </p>
      <AddToCart item={{ id: 1000, name: "Cup" }}>Adicionar item</AddToCart>
    </CartProvider>
  )
}
