import React, { useState, useEffect } from "react";
import Head from "next/head";
import useSWR from "swr";

import LoadingScreen from "../src/components/LoadingScreen";

import api from "../src/services/api";

const fetcher = url => api.get(url);

const Home = () => {
  const { data, error } = useSWR("/countries/Indonesia", fetcher);
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [death, setDeath] = useState(0);
  const [updated, setUpdated] = useState(new Date().toLocaleString());

  useEffect(() => {
    if (!data) return;
    const { data: information } = data;
    setConfirmed(information.confirmed.value);
    setRecovered(information.recovered.value);
    setDeath(information.deaths.value);
    setUpdated(new Date(information.lastUpdate).toLocaleString());
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <LoadingScreen />;

  return (
    <div className="container">
      <Head>
        <title>COVID 19</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          COVID-19 <br />
          Indonesia Statistic
        </h1>

        <div className="grid">
          <div className="card">
            <h3>Confirmed</h3>
            <p>{confirmed}</p>
          </div>

          <div className="card">
            <h3>Recovered</h3>
            <p>{recovered}</p>
          </div>
        </div>
        <div className="grid">
          <div className="card">
            <h3>Death</h3>
            <p>{death}</p>
          </div>
        </div>
      </main>

      <footer>
        <p>Last Update : {updated}</p>
        <p className="author"> Covid Web by Gegy Hamdani</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }

        .grid {
          display: flex;
          flex-direction: row;
          justify-content: center;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 2px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          min-width: 250px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .author {
          padding: 0;
          margin: 0;
          font-size: 0.8em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
