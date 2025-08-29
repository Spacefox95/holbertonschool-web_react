import Login from "./Login";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// Re-enable style injection after each test
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Login component", () => {
  test("renders 2 labels, 2 inputs and 1 button", () => {
    const { container } = render(<Login />);
    const labels = container.querySelectorAll("label");
    const inputs = container.querySelectorAll("input");
    expect(labels.length).toBe(2);
    expect(inputs.length).toBe(3);
    expect(screen.getByRole("button", { name: /ok/i })).toBeInTheDocument();
  });

  test("focuses the input when its label is clicked", async () => {
    const { container } = render(<Login />);
    const user = userEvent.setup();

    const emailLabel = container.querySelector('label[for="email"]');
    const emailInput = screen.getByLabelText(/email/i);

    await user.click(emailLabel);
    expect(emailInput).toHaveFocus();
  });
});
