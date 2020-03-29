import React from "react";
import useSWR from "swr";

import LoadingScreen from "../src/components/LoadingScreen";
import Layout from "../src/components/Layout";

import api from "../src/services/api";

import Context from "../src/util/appContext";

const fetcher = url => api.get(url);

const Home = () => {
  const { data: globalData } = useSWR("/countries/Indonesia", fetcher);
  const { data: localData, error } = useSWR(
    "/countries/Indonesia/confirmed",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!localData) return <LoadingScreen />;
  if (!globalData) return <LoadingScreen />;

  const { data: globalInfo } = globalData;
  const { data: localInfo } = localData;
  return (
    <>
      <Context.Provider
        value={{
          confirmed: localInfo[0].confirmed,
          recovered: localInfo[0].recovered,
          death: localInfo[0].deaths,
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
