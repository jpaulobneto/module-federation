import { Loader } from "../Loader/Loader"
import { Product, ProductProvider } from "../Product"

export function App() {
  return (
    <ProductProvider>
      <Loader
        src="http://localhost:3003/remoteEntry.js"
        lib="checkout"
        mod="./CartProvider"
      >
        <Product />
      </Loader>
    </ProductProvider>
  )
}
