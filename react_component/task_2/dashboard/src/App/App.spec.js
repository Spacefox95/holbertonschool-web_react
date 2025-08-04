import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("render Noitifications component", () => {
    render(<App />);
    const notifications = screen.getByText(/notifications/i);
    expect(notifications).toBeInTheDocument();
  });

  test("renders Header, Login, Footer, and Notifications", () => {
    render(<App />);
    const header = screen.getByText(/school dashboard/i);
    expect(header).toBeInTheDocument();
  });

  test("render login component", () => {
    render(<App isLoggedIn={false} />);
    const loginText = screen.getByText(/login to access the full dashboard/i);
    expect(loginText).toBeInTheDocument();
  });

  test("render footer component", () => {
    const currentYear = new Date().getFullYear();
    render(<App />);
    const footer = screen.getByText((content) =>
      content.includes(`Copyright ${currentYear}`)
    );
    expect(footer).toBeInTheDocument();
  });

  let alertMock;
  let logOutMock;

  beforeEach(() => {
    alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    logOutMock = jest.fn();
  });

  afterEach(() => {
    alertMock.mockRestore();
  });

  test("logOut when ctrl h", () => {
    render(<App logOut={logOutMock} />);

    const keyboardEvent = new KeyboardEvent("keydown", {
      key: "h",
      ctrlKey: true,
    });
    document.dispatchEvent(keyboardEvent);
    expect(logOutMock).toHaveBeenCalledTimes(1);
  });

  test("alert when ctrl h", () => {
    render(<App logOut={logOutMock} />);

    const keyboardEvent = new KeyboardEvent("keydown", {
      key: "h",
      ctrlKey: true,
    });
    document.dispatchEvent(keyboardEvent);

    expect(alertMock).toHaveBeenCalledWith("Logging you out");
  });
});
