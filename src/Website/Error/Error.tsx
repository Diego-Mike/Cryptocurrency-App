import React from "react";
import {
  ErrorWrapper,
  ErrorSVG,
  ErrorText,
  ErrorTextCapital
} from "./ErrorStyled";

import SVG from "./error.svg";

import { useHistory } from "react-router";

const Error = () => {
  const history = useHistory();

  return (
    <ErrorWrapper>
      <ErrorSVG src={SVG} alt="" />
      <ErrorText>
        <ErrorTextCapital style={{ color: "white", cursor: "default" }}>
          Error 404
        </ErrorTextCapital>
        <br />
        <br /> This Route Doesn't Exist <br />{" "}
        <span onClick={() => history.push("/")}> Go Back To Home </span>
      </ErrorText>
    </ErrorWrapper>
  );
};

export default Error;
