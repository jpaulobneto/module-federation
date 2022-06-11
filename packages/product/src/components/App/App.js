import { Product, ProductProvider } from "../Product"

export function App() {
  return (
    <>
      <ProductProvider>
        <Product />
      </ProductProvider>
    </>
  )
}
