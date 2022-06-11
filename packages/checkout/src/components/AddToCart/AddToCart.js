import { useCallback } from "react"
import { useCart } from "../Cart"

export function AddToCart({ children, item }) {
  const { actions } = useCart()
  const handleClick = useCallback(() => actions.add(item), [actions, item])

  return <button onClick={handleClick}>{children}</button>
}
