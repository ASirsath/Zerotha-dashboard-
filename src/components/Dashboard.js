import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [token, setToken] = useState(null);

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const receivedToken = params.get("token");

  const localToken = localStorage.getItem("token");

  if (receivedToken) {
    localStorage.setItem("token", receivedToken); // store for future
    setToken(receivedToken);
  } else if (localToken) {
    setToken(localToken);
  } else {
    window.location.href = "http://localhost:3000/login";
  }
}, []);


  return (
    <div className="dashboard-container" style={{ position: "relative" }}>
      {/* Optional: Logout button UI can be placed here */}

      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
