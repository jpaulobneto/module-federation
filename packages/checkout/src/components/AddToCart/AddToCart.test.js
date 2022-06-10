import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { AddToCart } from "./AddToCart"
import { useCart } from "../Cart"

jest.mock("../Cart")

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
    render(<AddToCart>{text}</AddToCart>)

    expect(screen.getByText(text)).toBeInTheDocument()
  })

  describe("when it is clicked", () => {
    const cup = { id: "1000", name: "Cup" }

    it("calls the onClick function", () => {
      render(<AddToCart item={cup}>{text}</AddToCart>)
      const element = screen.getByText(text)

      userEvent.click(element)

      expect(mockAdd).toBeCalledWith(cup)
      expect(mockAdd).toBeCalledTimes(1)
    })
  })
})
