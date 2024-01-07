import Filter from "../Filter";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),  
  Link: ({ to, ...rest }) => <a href={to} {...rest} />,  
}));

test("should render components", () => {
  render(<Filter />);
  const content = screen.getByTestId("filter");
  expect(content).toBeInTheDocument();
  expect(content).toHaveTextContent("Location");
  expect(content).toHaveTextContent("Payment");
  expect(content).toHaveTextContent("Date of Posted");
  expect(content).toHaveTextContent("Unlock New Opportunities!");
  expect(content).toHaveTextContent("Post a Job Now on parttimez and Find Your Perfect Candidates Today!");
  expect(content).toHaveTextContent("Post a Job");
});

// test("should render correct texts", () => {
//   render(<Filter />);
//   const content = screen.getByTestId("content01");
//   expect(content).toHaveTextContent("Unlock New Opportunities!");
// });

// test("test should render texts", () => {
//   render(<Filter />);
//   const content = screen.getByTestId("content02");
//   expect(content).toHaveTextContent(
//     "Post a Job Now on parttimez and Find Your Perfect Candidates Today!"
//   );
// });

// test("test should render correct form texts", () => {
//   render(<Filter />);
//   const content = screen.getByTestId("formContent01");
//   expect(content).toHaveTextContent("Any");
// });
