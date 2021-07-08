import React from "react";
import {
  ErrorWrapper,
  ErrorSVG,
  ErrorText,
  ErrorTextCapital
} from "../../Website/Error/ErrorStyled";

import errorserver from "./errorserver.svg";
import { useHistory, useLocation } from "react-router";

const ErrorServer = () => {
  const history = useHistory();
  return (
    <ErrorWrapper>
      <ErrorSVG src={errorserver} alt="" />
      <ErrorText>
        <ErrorTextCapital style={{ color: "#00BFA6", cursor: "default" }}>
          Server Has Failed
        </ErrorTextCapital>
        <br />
        <br />
        Or Maybe You Have Done A Bad Request
        <br />
        <span style={{ color: "#00BFA6" }} onClick={() => history.go(0)}>
          Go Back
        </span>
      </ErrorText>
    </ErrorWrapper>
  );
};

export default ErrorServer;
