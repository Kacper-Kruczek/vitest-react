import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, expect, it } from "vitest";
import App from "./App";

describe("Simple working test", () => {
  it("counter is visible", () => {
    render(<App />);
    expect(screen.getByText("counter:0")).toBeInTheDocument();
  });

  it("should start with custom counter", () => {
    render(<App initialCounter={1} />);
    expect(screen.getByText("counter:1")).toBeInTheDocument();
  });

  it("should increment counter on click", async () => {
    render(<App />);
    expect(screen.getByText("counter:0")).toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: "add" }));
    expect(screen.getByText("counter:1")).toBeInTheDocument();
  });
});
