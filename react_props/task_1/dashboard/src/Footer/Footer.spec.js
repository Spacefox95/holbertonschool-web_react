import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import * as utils from "../utils/utils";

describe("Footer component", () => {
  test("renders correct text when isIndex is true", () => {
    // Mock utility functions
    jest.spyOn(utils, "getFooterCopy").mockReturnValue("Holberton School");
    jest.spyOn(utils, "getCurrentYear").mockReturnValue(2025);

    render(<Footer />);

    const footerText = screen.getByText(/2025 - holberton school/i);
    expect(footerText).toBeInTheDocument();

    // Clean up mocks
    jest.restoreAllMocks();
  });
});
