import { render, screen } from "@testing-library/react";
import App from "../App/App";

describe("Footer component", () => {
  test("renders correct text when isIndex is true", () => {
    render(<App />);
    const bodyParagraph = screen.getByText(
      /login to access the full dashboard/i
    );
    expect(bodyParagraph).toBeInTheDocument();

    const currentYear = new Date().getFullYear();
    const footerParagraph = screen.getByText(
      new RegExp(`copyright ${currentYear} - holberton school`, "i")
    );
    expect(footerParagraph).toBeInTheDocument();
  });
});
