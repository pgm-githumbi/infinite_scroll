import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders project name", () => {
  render(<App />);
  const linkElement = screen.getByText(/youtube/i);

  expect(linkElement).toBeInTheDocument();
});
