import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import WithLogging from "./WithLogging";
import { Component } from "react";

class MockApp extends Component {
  render() {
    return <h1>Hello from Mock App Component</h1>;
  }
}

describe("WithLogging HOC", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    consoleSpy.mockClear();
  });
  afterAll(() => {
    consoleSpy.mockRestore();
  });

  test("renders heading from wrapped component", () => {
    const MockAppLog = WithLogging(MockApp);
    render(<MockAppLog />);
    expect(
      screen.getByText(/Hello from Mock App Component/i)
    ).toBeInTheDocument();
  });

  test("logs mounts and unmount messages", () => {
    const MockAppLog = WithLogging(MockApp);
    const { unmount } = render(<MockAppLog />);
    expect(consoleSpy).toHaveBeenCalledWith("Component MockApp is mounted");
    unmount();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Component MockApp is going to unmount"
    );
  });
});
