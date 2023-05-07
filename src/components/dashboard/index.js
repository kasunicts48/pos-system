import React from "react";
import styles from "./index.module.css";
import DashboardSingleCard from "./dashboardSingleCard";

const Dashboard = () => {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.componentDiv}>
          <h2>Dashboard</h2>
          <div className={styles.dashboardCardList} >
            <DashboardSingleCard />
            <DashboardSingleCard />
            <DashboardSingleCard />
            <DashboardSingleCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
