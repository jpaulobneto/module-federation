import { useCallback, useState } from "react"

export const useCartSlice = () => {
  const [items, setItems] = useState([])
  const count = items.length

  const add = useCallback(
    (item) => setItems((prevItems) => [...prevItems, item]),
    []
  )

  return {
    state: { items, count },
    actions: { add },
  }
}
