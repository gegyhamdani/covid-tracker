/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from "react";

import AppContext from "../../util/appContext";

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

const Layout = () => {
  const { confirmed, recovered, death, updated } = useContext(AppContext);

  return (
    <Main>
      <Container>
        <Square1>
          <Date style={{ fontSize: "1.1em" }}>Update Terakhir: {updated}</Date>
          <Title>Data Terbaru Corona di Indonesia</Title>
          <Information>
            <Data>
              <h1>{confirmed}</h1>
              <p>Total Kasus</p>
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
        </Square1>
        <Square2>
          <img src="v.png" alt="virus" />
        </Square2>
      </Container>
    </Main>
  );
};

export default Layout;
