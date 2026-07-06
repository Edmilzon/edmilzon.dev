import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "../Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders with variant classes", () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByText("Primary");
    expect(button.className).toContain("bg-primary");
  });

  it("forwards className", () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByText("Custom");
    expect(button.className).toContain("custom-class");
  });
});
