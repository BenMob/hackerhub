import { render, screen } from "@testing-library/react";
import Footer from "../../../../src/presentation/concretes/Footer";
import testData from "../../../testdata/presentation/concretes/footer.json";

test("Footer has all the required information", () => {
  render(<Footer />)
  expect(screen.getByText(testData.author)).toBeInTheDocument();
  expect(screen.getByText(/Benjamin Ombeni/)).toBeInTheDocument();
  expect(screen.getByRole("link")).toHaveAttribute("href", testData.authorLink);
  expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  expect(screen.getByText(/©/)).toBeInTheDocument();
})