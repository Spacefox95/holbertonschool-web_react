import Login from "./Login";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Login component", () => {
  test("renders two input elements", () => {
    render(<Login />);
    const input = screen.getAllByRole("textbox");
    const passwdInputs = screen.getAllByLabelText(/Password/i);
    expect(input.length).toBeGreaterThanOrEqual(1);
    expect(passwdInputs.length).toBe(1);
  });

  test("renders two labels elements for Email and Password", () => {
    render(<Login />);
    const emailLabel = screen.getByLabelText(/Email/i);
    const passwdLabel = screen.getByLabelText(/Password/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwdLabel).toBeInTheDocument();
  });

  test("render a button with text 'OK'", () => {
    render(<Login />);
    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).toBeInTheDocument();
  });

  test("renders 2 labels, 2 inputs, and 1 button", () => {
    render(<Login />);
    expect(screen.getAllByLabelText(/email|password/i)).toHaveLength(2);
    expect(screen.getAllByRole("textbox")).toHaveLength(1); // Email is a text box
    expect(screen.getAllByLabelText(/password/i)[0].type).toBe("password");
    expect(screen.getByRole("button", { name: /ok/i })).toBeInTheDocument();
  });

  test("focuses input when label is clicked", () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.click(screen.getByText(/email/i));
    expect(document.activeElement).toBe(emailInput);
  });
});
