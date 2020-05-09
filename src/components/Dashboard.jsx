import React from "react";
import Sidebar from "./Sidebar";
import DashboardContainer from "./DashboardContainer";
import ContentContainer from "./content/ContentContainer";
import Search from "./content/Search";
import Hot from "./content/Hot";
import Liked from "./content/Liked";
import Current from "./content/Current";

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
