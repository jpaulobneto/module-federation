import { AddToCart } from "../AddToCart"
import { Cart } from "../Cart"

export function App() {
  return (
    <>
      <p>
        <Cart />
      </p>
      <AddToCart item={{ id: 1000, name: "Cup" }}>Adicionar item</AddToCart>
    </>
  )
}
