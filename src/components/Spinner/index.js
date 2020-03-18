import React from "react";

import { Container, Wrapper } from "./styles";

const index = () => {
  return (
    <Wrapper>
      <Container>
        {Array(12)
          .fill()
          .map((data, i) => {
            return <div key={i} />;
          })}
      </Container>
    </Wrapper>
  );
};

export default index;
