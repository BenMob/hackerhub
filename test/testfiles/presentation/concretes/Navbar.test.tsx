
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import Navbar from "../../../../src/presentation/concretes/Navbar";
import testData from "../../../testdata/presentation/concretes/navbar.json";

// Functions to be called on fired events
const onAppLogoClicked: Function = jest.fn(() => { console.log("App Logo Clicked!") });

beforeEach(() => {
  render(<Navbar appLogoClickHandler={onAppLogoClicked} />)
})

afterEach(cleanup)

describe("NavBar Component Test", () => {
  test("Navbar has all the required information", () => {
    expect(screen.getByTestId(testData.appLogoTID)).toBeInTheDocument();
    expect(screen.getByTestId(testData.githubIconLinkTID)).toBeInTheDocument();
    expect(screen.getByTestId(testData.githubIconLinkTID)).toHaveAttribute("href", testData.githubLink);
    expect(screen.getByTestId(testData.githubIconLinkTID).childNodes.length).toBe(1);
  })

  test("Navbar interactivity", () => {
    expect(onAppLogoClicked).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByTestId(testData.appLogoTID));
    expect(onAppLogoClicked).toHaveBeenCalledTimes(1);
  })
})


export {}