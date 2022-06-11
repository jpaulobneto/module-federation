import { ProductContext } from "./ProductContext"
import { useProductSlice } from "./useProductSlice"

export function ProductProvider({ children }) {
  return (
    <ProductContext.Provider value={useProductSlice()}>
      {children}
    </ProductContext.Provider>
  )
}
