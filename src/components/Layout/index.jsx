/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";

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
          <Date style={{ fontSize: "1.2em" }}>{updated}</Date>
          <Title>Data Terbaru Corona di Indonesia</Title>
          <Information>
            <Data>
              <h1>{confirmed}</h1>
              <p>Positif Corona</p>
            </Data>
            <Border />
            <Data>
              <h1 style={{ color: "#00a08f" }}>{recovered}</h1>
              <p>Sembuh</p>
            </Data>
            <Border />
            <Data>
              <h1>{death}</h1>
              <p>Meninggal Dunia</p>
            </Data>
          </Information>
          <Date>
            Sumber:&nbsp;
            <a
              href="https://github.com/mathdroid/covid-19-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              mathrdoid
            </a>
          </Date>
        </Square1>
        <Square2>
          <img src="v.png" alt="virus" />
        </Square2>
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
