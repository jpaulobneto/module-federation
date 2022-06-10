import { act, renderHook } from "@testing-library/react-hooks"
import { useCartSlice } from "./useCartSlice"

describe("useCartSlice", () => {
  it("inits as empty cart", () => {
    const {
      result: {
        current: { state },
      },
    } = renderHook(() => useCartSlice())

    expect(state.items).toEqual([])
    expect(state.count).toEqual(0)
  })

  describe("when add an item", () => {
    it("adds the item to the end of items", () => {
      const cup = { id: "1000", name: "Cup" }
      const { result } = renderHook(() => useCartSlice())

      act(() => {
        result.current.actions.add(cup)
      })

      expect(result.current.state.items).toEqual([cup])
    })
  })
})
