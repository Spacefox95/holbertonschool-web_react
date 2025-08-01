import { render, screen } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  test("renders a close button", () => {
    render(<Notifications />);
    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  test("renders a list with 3 notification items", () => {
    const { container } = render(<Notifications />);
    const listItems = container.querySelectorAll("li");
    expect(listItems.length).toBe(3);
  });
});
