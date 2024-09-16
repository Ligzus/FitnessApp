// CoursePage.test.tsx

import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CoursePage from "./CoursePage";

// Мокируем хук useUser
jest.mock("../../hooks/useUser", () => ({
  useUser: () => ({
    user: { uid: "test-uid" }
  })
}));

describe("CoursePage", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Router>
        <CoursePage openModal={() => {}} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
