import { useCart } from "./useCart"

export function Cart() {
  const { state } = useCart()

  return <strong>basket: {state.count}</strong>
}
