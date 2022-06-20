
import { render, screen } from "@testing-library/react"
import Navbar from "../../../../src/presentation/concretes/Navbar"
import testData from "../../../testdata/presentation/concretes/navbar.json"

describe("NavBar Component Test", () => {
  test("Navbar has all the required information", () => {
    render(<Navbar />)
    expect(screen.getByText(testData.headingName)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", testData.githubLink)
    expect(screen.getByTestId(testData.githubIconTID)).toHaveAttribute("cursor", "pointer");
  })
})


export {}