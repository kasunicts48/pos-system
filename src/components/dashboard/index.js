import React from "react";
import styles from "./index.module.css";
import DashboardSingleCard from "./dashboardSingleCard";

const dashboardCardDetails = [
  {
    name: "Today’s Sales",
    amount: 35000,
    icon: ""
  },
  {
    name: "Today’s revenue",
    amount: 35000,
    icon: ""
  },
  {
    name: "Today’s Customers",
    amount: 100,
    icon: ""
  },
  {
    name: "Today’s  total orders",
    amount: 100,
    icon: ""
  },
];

const Dashboard = () => {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.componentDiv}>
          <h2>Dashboard</h2>
          <div className={styles.dashboardCardList}>
            {dashboardCardDetails.map((item,key) => {
              return (
                <DashboardSingleCard key={key} name={item.name} amount={item.amount} icon={item.icon} />
              )
            })}
           
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
