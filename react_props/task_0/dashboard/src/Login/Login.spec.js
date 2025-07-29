import Login from "./Login";
import { render, screen } from "@testing-library/react";

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
});
