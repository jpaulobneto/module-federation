import { useCallback } from "react"
import { useCart } from "../Cart/useCart"
import styles from "./AddToCart.module.css"

export function AddToCart({ children, item }) {
  const { actions } = useCart()
  const handleClick = useCallback(() => actions.add(item), [actions, item])

  return (
    <button className={styles.AddToCart} onClick={handleClick}>
      {children}
    </button>
  )
}
