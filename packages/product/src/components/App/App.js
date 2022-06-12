import { CartProvider } from "checkout/CartProvider"
import { Product, ProductProvider } from "../Product"

export function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <Product />
      </ProductProvider>
    </CartProvider>
  )
}
