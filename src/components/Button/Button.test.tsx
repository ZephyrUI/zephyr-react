import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom";

describe("Button", () => {
	it("renders the button", () => {
		render(<Button />);
		expect(screen.getByText("Button")).toBeInTheDocument();
	});
});
