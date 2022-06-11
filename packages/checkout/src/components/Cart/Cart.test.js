import { render, screen } from "@testing-library/react"
import { Cart, CartProvider } from "."

describe("Cart", () => {
  it("renders itself", () => {
    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    )

    const element = screen.getByText(/basket/i)

    expect(element).toBeInTheDocument()
  })
})
