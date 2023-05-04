import React from "react";
import styles from "./index.module.css";
import { RxDashboard } from "react-icons/rx";
import { AiTwotoneShop, AiTwotoneSetting } from "react-icons/ai";
import { FaFileInvoice } from "react-icons/fa";
import { SlSocialDropbox } from "react-icons/sl";
import { MdPeopleAlt } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { useRouter } from "next/router";

const dashboardList = [
  {
    name: "dashboard",
    icon: "add",
    routerName: "dashboard",
    icon: <RxDashboard />,
  },
  {
    name: "GRN",
    icon: "add",
    routerName: "grn",
    icon: <AiTwotoneShop />,
  },
  {
    name: "invoices",
    icon: "add",
    routerName: "invoices",
    icon: <FaFileInvoice />,
  },
  {
    name: "GRN View",
    icon: "add",
    routerName: "grn-view",
    icon: <SlSocialDropbox />,
  },
  {
    name: "customer",
    icon: "add",
    routerName: "customer",
    icon: <MdPeopleAlt />,
  },
  {
    name: "users",
    icon: "add",
    routerName: "users",
    icon: <HiUserGroup />,
  },
  {
    name: "settings",
    icon: "add",
    routerName: "settings",
    icon: <AiTwotoneSetting />,
  },
];

const DashboardIconList = () => {
  const router = useRouter();

  const menuItemClickHandle = (routerName) => {
    router.push(`/${routerName}`);
  };

  return (
    <>
      <div className={styles.mainDiv}>
        {dashboardList.map((item, key) => {
          return (
            <div
              className={styles.iconDiv}
              key={key}
              onClick={() => {
                menuItemClickHandle(item.routerName);
              }}
            >
              <div className={styles.icon}>
                {item.icon}
                <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DashboardIconList;
