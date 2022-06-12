import { CartContext } from "./CartContext"
import { useCartSlice } from "./useCartSlice"

export default function CartProvider({ children }) {
  return (
    <CartContext.Provider value={useCartSlice()}>
      {children}
    </CartContext.Provider>
  )
}
