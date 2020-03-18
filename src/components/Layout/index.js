import React from "react";
import PropTypes from "prop-types"; // ES6

import {
  Main,
  Container,
  Square1,
  Square2,
  Date,
  Title,
  Information,
  Data,
  Border
} from "./styles";

const Layout = ({ confirmed, recovered, death, updated }) => {
  return (
    <Main>
      <Container>
        <Square1>
          <Date>{updated}</Date>
          <Title>Data Terbaru Corona di Indonesia</Title>
          <Information>
            <Data>
              <h1>{confirmed}</h1>
              <p>Positif Corona</p>
            </Data>
            <Border />
            <Data>
              <h1>{recovered}</h1>
              <p>Sembuh</p>
            </Data>
            <Border />
            <Data>
              <h1>{death}</h1>
              <p>Meninggal Dunia</p>
            </Data>
          </Information>
        </Square1>
        <Square2> 2 </Square2>
      </Container>
    </Main>
  );
};

Layout.propTypes = {
  confirmed: PropTypes.number,
  recovered: PropTypes.number,
  death: PropTypes.number,
  updated: PropTypes.string
};

Layout.defaultProps = {
  confirmed: 0,
  recovered: 0,
  death: 0,
  updated: ""
};

export default Layout;
