import { render } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// Re-enable style injection after each test
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("BodySectionWithMarginBottom", () => {
  test("renders the BOdySection component with correct content", () => {
    const { getByText } = render(
      <BodySectionWithMarginBottom title="Test title">
        <p>Some content</p>
      </BodySectionWithMarginBottom>
    );
    expect(getByText("Test title")).toBeInTheDocument();
    expect(getByText("Some content")).toBeInTheDocument();
  });
});
