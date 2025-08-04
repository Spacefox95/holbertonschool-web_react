import { render, screen } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  test("renders a close button", () => {
    render(<Notifications />);
    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  test("renders a list with 3 notification items", () => {
    const list = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      {
        id: 3,
        type: "urgent",
        html: {
          __html: "<strong>Urgent requirement</strong> - complete by EOD",
        },
      },
    ];

    const { container } = render(<Notifications notifications={list} />);
    const listItems = container.querySelectorAll("li");
    expect(listItems.length).toBe(3);
  });
});
