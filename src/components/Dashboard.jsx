import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import DashboardContainer from "./DashboardContainer";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar></Sidebar>
      <Content></Content>
    </DashboardContainer>
  );
};

export default Dashboard;
