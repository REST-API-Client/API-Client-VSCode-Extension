import React from "react";
import styled from "styled-components";

import connectionIcon from "../../../assets/connection.svg";

const ResponseEmptyMenu = () => {
  return (
    <EmptyMenuMessageContainer>
      <EmptyMessageContainer>
        <img src={connectionIcon} alt="Connection SVG" />
        <p>Enter request URL and click send to get a response</p>
      </EmptyMessageContainer>
    </EmptyMenuMessageContainer>
  );
};

const EmptyMenuMessageContainer = styled.div`
  width: 100%;

  h2 {
    margin-top: 0.5rem;
  }
`;

const EmptyMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  opacity: 0.75;

  p {
    margin-top: 2rem;
  }
`;

export default ResponseEmptyMenu;
``;
