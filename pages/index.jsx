import React, { useState, useEffect } from "react";
import useSWR from "swr";

import LoadingScreen from "../src/components/LoadingScreen";
import Layout from "../src/components/Layout";

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
    <>
      <Layout
        confirmed={confirmed}
        recovered={recovered}
        death={death}
        updated={updated}
      />
      <style jsx global>
        {`
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
        `}
      </style>
    </>
  );
};

export default Home;
