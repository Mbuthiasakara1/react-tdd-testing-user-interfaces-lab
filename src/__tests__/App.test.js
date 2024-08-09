import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

//Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  //Arrange
  render(<App />);
  //Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("display an image with the alt `a girl coding", () => {
  render(<App />);
  const imageElement = screen.getByAltText(/a girl coding/i);
  expect(imageElement).toBeInTheDocument();
});

test("displays a paragraph with the text ` This is my biography`", () => {
  render(<App />);
  const paragraphElement = screen.getByText(/This is my biography/i);
  expect(paragraphElement).toBeInTheDocument();
});
