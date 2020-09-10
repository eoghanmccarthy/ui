import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

import Anchor from "../Anchor.js";

describe("Anchor component", () => {
  afterEach(cleanup);

  const MockComponent = props => (
    <Anchor testId={"instance-test-id"} {...props} />
  );

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MockComponent href={"http://google.com"}>click</MockComponent>,
      div
    );
  });

  it("renders children", () => {
    const { getByTestId } = render(
      <MockComponent href={"http://google.com"}>Click</MockComponent>
    );
    expect(getByTestId("instance-test-id")).toHaveTextContent("Click");
  });

  it("renders with correct css classes", () => {
    const { getByTestId } = render(
      <MockComponent className={"instance-class"} href={"http://google.com"}>
        Click
      </MockComponent>
    );
    expect(getByTestId("instance-test-id")).toHaveClass(
      "ui-anchor",
      "instance-class"
    );
  });

  it("renders correctly as placeholder link", () => {
    const { getByTestId } = render(<MockComponent>Click</MockComponent>);
    expect(getByTestId("instance-test-id")).toHaveClass("placeholder");
  });

  // it("renders and onClick event is called", () => {
  //   const onClick = jest.fn();
  //
  //   const { getByTestId } = render(
  //     <MockComponent className={"instance-class"} onClick={onClick}>
  //       Click
  //     </MockComponent>
  //   );
  //   userEvent.click(getByTestId("instance-test-id"));
  //   expect(onClick).toHaveBeenCalled();
  // });

  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <MockComponent className={"instance-class"} href={"http://google.com"}>
          Click
        </MockComponent>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
