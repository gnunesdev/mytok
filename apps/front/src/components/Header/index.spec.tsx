import { render, screen } from "@testing-library/react"
import { Header } from "."

describe("Header", () => {
  it('should render header properly', () => {
    render(<Header/>);

    const titleElement = screen.getByText("MyTok");

    expect(titleElement).not.toBeNull();
  })
})