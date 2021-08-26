import React from "react";
import useSWR from "swr";

import LoadingScreen from "../src/components/LoadingScreen";
import Layout from "../src/components/Layout";

import api from "../src/services/api";

import Context from "../src/util/appContext";

const fetcher = url => api.get(url);

const Home = () => {
  const { data: globalData, error } = useSWR("/countries/Indonesia", fetcher);

  if (error) return <div>failed to load</div>;
  if (!globalData) return <LoadingScreen />;

  const { data: globalInfo } = globalData;
  return (
    <>
      <Context.Provider
        value={{
          confirmed: globalInfo.confirmed.value,
          recovered: globalInfo.recovered.value,
          death: globalInfo.deaths.value,
          updated: new Date(globalInfo.lastUpdate).toLocaleString()
        }}
      >
        <Layout />
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
      </Context.Provider>
    </>
  );
};

export default Home;
