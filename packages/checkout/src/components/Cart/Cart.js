import styles from "./Cart.module.css"
import { useCart } from "./useCart"

export function Cart() {
  const { state } = useCart()

  return <div className={styles.Cart}>Carrinho: {state.count}</div>
}
