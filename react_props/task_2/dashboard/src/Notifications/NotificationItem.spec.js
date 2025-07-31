import React from "react";
import { render } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe("NotificationItem component", () => {
  test("renders default type with blue color", () => {
    const { container } = render(<NotificationItem type="default" value="Test default" />);
    const li = container.querySelector("li");
    expect(li).toHaveStyle("color: blue");
    expect(li).toHaveAttribute("data-notification-type", "default");
  });

  test("renders urgent type with red color", () => {
    const { container } = render(<NotificationItem type="urgent" value="Urgent item" />);
    const li = container.querySelector("li");
    expect(li).toHaveStyle("color: #e1003c");
    expect(li).toHaveAttribute("data-notification-type", "urgent");
  });
});
