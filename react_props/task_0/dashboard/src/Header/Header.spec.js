import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  test('renders the heading with text "School dashboard"', () => {
    render(<Header />);
    const heading = screen.getByRole("heading", { name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });
});
