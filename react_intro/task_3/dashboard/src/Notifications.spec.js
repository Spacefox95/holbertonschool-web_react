import React from "react";
import {
  render,
  screen,
  fireEvent,
  describe,
  test,
  expect,
} from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  test("render the notifications title", () => {
    render(<Notifications />);
    const title = screen.getByText(/here is the list of notifications/i);
    expect(title).toBeInTheDocument();
  });

  test("render a close button", () => {
    render(<Notifications />);
    const button = screen.getByRole("button", { name: /close/i });
    expect(button).toBeInTheDocument();
  });

  test("renders exactly 3 li elements", () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });

  test("Logs message when close button is clicked", () => {
    const consoleLog = jest.spyOn(console, "log").mockImplementation();

    render(<Notifications />);

    const closeButton = screen.getByRole("button", { name: /close/i });

    fireEvent.click(closeButton);

    expect(consoleLog).toHaveBeenCalledWith("close button has been clicked");

    consoleLog.mockRestore();
  });
});
