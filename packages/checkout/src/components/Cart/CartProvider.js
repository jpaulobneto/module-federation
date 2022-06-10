import { CartContext } from "./CartContext"
import { useCartSlice } from "./useCartSlice"

export function CartProvider({ children }) {
  const { state, actions } = useCartSlice()

  return (
    <CartContext.Provider value={{ state, actions }}>
      {children}
    </CartContext.Provider>
  )
}
