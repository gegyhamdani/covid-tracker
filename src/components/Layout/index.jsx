/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from "react";

import AppContext from "../../util/appContext";

import {
  Main,
  Container,
  Square1,
  Square2,
  Date,
  Footer,
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
          <Date>Update Terakhir: {updated.toLocaleString("id")}</Date>
          <Title>Data Terbaru Corona di Indonesia</Title>
          <Information>
            <Data>
              <h1>{confirmed.toLocaleString("id")}</h1>
              <p>Total Kasus</p>
            </Data>
            <Border />
            <Data>
              <h1 style={{ color: "#00a08f" }}>
                {recovered.toLocaleString("id")}
              </h1>
              <p>Sembuh</p>
            </Data>
            <Border />
            <Data>
              <h1>{death.toLocaleString("id")}</h1>
              <p>Meninggal Dunia</p>
            </Data>
          </Information>
          <Footer>
            Sumber:&nbsp;
            <a
              href="https://github.com/mathdroid/covid-19-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              mathrdoid
            </a>
          </Footer>
        </Square1>
        <Square2>
          <img src="v.png" alt="virus" />
        </Square2>
      </Container>
    </Main>
  );
};

export default Layout;
