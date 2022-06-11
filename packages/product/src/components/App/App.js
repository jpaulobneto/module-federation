import { Product } from "../Product/Product"
import { ProductProvider } from "../Product/ProductProvider"

export function App() {
  return (
    <>
      <ProductProvider>
        <Product />
      </ProductProvider>
    </>
  )
}
