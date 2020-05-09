import React from "react";
import Sidebar from "./Sidebar";
import DashboardContainer from "./DashboardContainer";
import ContentContainer from "./ContentContainer";
import Search from "./Search";
import Hot from "./Hot";
import Liked from "./Liked";
import Current from "./Current";

// eslint-disable-next-line react/prop-types
const Dashboard = ({ search, hot, liked, current }) => {
  const content = () => {
    switch (true) {
      case search:
        return <Search></Search>;
      case hot:
        return <Hot></Hot>;
      case liked:
        return <Liked></Liked>;
      case current:
        return <Current></Current>;
      default:
        return <Search></Search>;
    }
  };

  return (
    <DashboardContainer>
      <Sidebar></Sidebar>
      <ContentContainer>{content()}</ContentContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
