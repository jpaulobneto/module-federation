import { CartContext } from "./CartContext"
import { useCartSlice } from "./useCartSlice"

export function CartProvider({ children }) {
  return (
    <CartContext.Provider value={useCartSlice()}>
      {children}
    </CartContext.Provider>
  )
}
