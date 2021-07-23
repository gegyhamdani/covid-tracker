/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from "react";

import AppContext from "../../util/appContext";

import {
  Main,
  Header,
  HeaderRow,
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
      <Header>
        <HeaderRow style={{ marginRight: "-5px" }}>
          <a
            href="https://github.com/gegyhamdani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="github.png" alt="github" width="30px" height="30px" />
          </a>
        </HeaderRow>
        <HeaderRow>
          <a
            href="https://www.linkedin.com/in/gegy-faskal-nur-hamdani-627127106/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="linkedin.png" alt="linkedin" width="30px" height="30px" />
          </a>
        </HeaderRow>
      </Header>
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
              <h1 style={{ color: "#004D14" }}>
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
          <img src="v.png" alt="virus" width="250px" height="300px" />
        </Square2>
      </Container>
    </Main>
  );
};

export default Layout;
