import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CartProvider, useCart } from "../Cart"
import { AddToCart } from "./AddToCart"

jest.mock("../Cart", () => {
  const originalModule = jest.requireActual("../Cart")
  return {
    ...originalModule,
    useCart: jest.fn(),
  }
})

describe("AddToCart", () => {
  const text = "Add to cart"
  const mockAdd = jest.fn()

  beforeEach(() => {
    useCart.mockImplementation(() => ({
      actions: {
        add: mockAdd,
      },
    }))
  })

  it("renders the text", () => {
    render(
      <CartProvider>
        <AddToCart>{text}</AddToCart>
      </CartProvider>
    )

    expect(screen.getByText(text)).toBeInTheDocument()
  })

  describe("when clicked", () => {
    const cup = { id: "1000", name: "Cup" }

    it("calls the onClick function", () => {
      render(
        <CartProvider>
          <AddToCart item={cup}>{text}</AddToCart>
        </CartProvider>
      )
      const element = screen.getByText(text)

      userEvent.click(element)

      expect(mockAdd).toBeCalledWith(cup)
      expect(mockAdd).toBeCalledTimes(1)
    })
  })
})
