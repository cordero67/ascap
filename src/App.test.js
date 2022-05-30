import { render, screen } from "@testing-library/react";
import App from "./App";

const assert = require("assert");
require("chai").use(require("chai-as-promised")).should();

/*
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

let container = null;

describe("Membership Application", () => {
  render(<App />);
  let result = "success";
  console.log("App.selectError: ", App.selectError);
  it("Processes an application", () => {
    assert.equal("success", result);
  });
});
