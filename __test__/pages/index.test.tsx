import WelcomePage from "@/pages/index";
import { screen } from "@testing-library/react";
import { render } from "../test-utils";

describe("Home", () => {
  it("renders a heading", () => {
    render(<WelcomePage />);

    const heading = screen.getByRole("heading", {
      name: "Welcome!",
    });

    expect(heading).toBeInTheDocument();
  });
});
