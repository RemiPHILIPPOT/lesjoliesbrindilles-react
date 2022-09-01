import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "rgba(235,215,215,255)")};
  background-color: ${(props) => (props.border ? "transparent" : "rgba(235,215,215,255)")};
  width: 100%;
  font-weight: bold;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "rgb(120, 70, 85)")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "rgb(120, 70, 85)")};
    border: 1px solid rgba(235,215,215,255);
    color: ${(props) => (props.border ? "rgba(235,215,215,255)" : "rgba(235,215,215,255)")};
  }
`;

