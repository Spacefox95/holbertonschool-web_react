import { render } from "@testing-library/react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

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
