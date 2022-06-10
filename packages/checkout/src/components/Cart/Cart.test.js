import { render, screen } from "@testing-library/react"
import { Cart } from "./Cart"

describe("Cart", () => {
  it("renders itself", () => {
    render(<Cart />)

    const element = screen.getByText(/basket/i)

    expect(element).toBeInTheDocument()
  })
})
