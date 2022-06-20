import {screen, render} from "@testing-library/react";
import About from "../../../../src/presentation/concretes/About";
import testData from "../../../testdata/presentation/concretes/about.json";

describe("Footer Component Test", () => {
  test("About has all the required information", () => {
    render(<About />);

    const firstPartOfDescription: HTMLElement = screen.getByText(/Hackerhub is a tool that displays interesting insights about programming languages from any public github account in the form of an easy-to-read dashboard. To achieve this, Hackerhub makes use of the /);
    const secondPartOfDescription: HTMLElement = screen.getByText(/and the/);
    const thirdPartOfDescription: HTMLElement = screen.getByText(/, among other technologies./);

    expect(firstPartOfDescription).toBeInTheDocument();
    expect(screen.getByText(testData.githubUserAPI)).toHaveAttribute("href", testData.githubUserAPIURL);
    expect(secondPartOfDescription).toBeInTheDocument();
    expect(screen.getByText(testData.chartLibrary)).toHaveAttribute("href", testData.chartLibraryURL);
    expect(thirdPartOfDescription).toBeInTheDocument();
  })
})

export {}