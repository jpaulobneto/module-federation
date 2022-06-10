import { act, renderHook } from "@testing-library/react-hooks"
import { useCart } from "./useCart"

describe("useCart", () => {
  it("inits as empty cart", () => {
    const {
      result: {
        current: { state },
      },
    } = renderHook(() => useCart())

    expect(state.items).toEqual([])
    expect(state.count).toEqual(0)
  })

  describe("when add an item", () => {
    it("adds the item to the end of items", () => {
      const cup = { id: "1000", name: "Cup" }
      const { result } = renderHook(() => useCart())

      act(() => {
        result.current.actions.add(cup)
      })

      expect(result.current.state.items).toEqual([cup])
    })
  })
})
