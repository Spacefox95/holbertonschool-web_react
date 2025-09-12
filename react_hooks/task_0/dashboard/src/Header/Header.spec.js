import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { newContext } from "../Context/context";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header component with context", () => {
  test("clicking logout calls logOut function", () => {
    const logOutMock = jest.fn();
    const user = {
      email: "user@test.com",
      password: "12345678",
      isLoggedIn: true,
    };
    render(
      <newContext.Provider value={{ user, logOut: logOutMock }}>
        <Header />
      </newContext.Provider>
    );

    const logoutLink = screen.getByText(/\(logout\)/i);
    fireEvent.click(logoutLink);

    expect(logOutMock).toHaveBeenCalled();
  });
});
