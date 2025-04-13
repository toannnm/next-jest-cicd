/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page params={{ slug: "test-slug" }} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Blog Post: test-slug");
});
