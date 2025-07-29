import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  test("render the notifications title", () => {
    render(<Notifications />);
    const title = screen.getByText(/Here is the list of notifications/i);
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
    expect(listItems.length).toBe(3);
  });

  test("clicking the close button logs to console", () => {
    console.log = jest.fn();
    render(<Notifications />);
    const button = screen.getByRole("button", { name: /close/i });
    fireEvent.click(button);

    expect(console.log).toHaveBeenCalledWith("Close button has been clicked");

    console.log.mockRestore();
  });
});
