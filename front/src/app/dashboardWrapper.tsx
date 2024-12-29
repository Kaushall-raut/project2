"use client";
import { useSelector } from "react-redux";
import { Navbar } from "./(components)/Navbar"; //! parenthesis shows that this is not a seperate page
import { Sidebar } from "./(components)/Sidebar";
import StoreProvider from "./redux";
import { useEffect } from "react";

export const DashboardLayout = ({ children }) => {
  //!   children props shows that whatever content you put inside a component will be rendered . in simple terms it  is like props but with some special feature
  // const isSidebarCollapsed = useSelector(
  //   (state) => state.global.isSidebarCollapsed
  // );
  const isDarkMode = useSelector((state) => state.global.isDarkMode);

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [isDarkMode]);

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900 ">
      {/* <Sidebar />
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${
          isSidebarCollapsed ? "" : "md:pl-64"
        }`}
      >
        <Navbar /> */}
      {/* {children} */}
      <h1>hello</h1>
      {/* </main> */}
    </div>
  );
};

// ! high order component -  takes component as input and returns a new component
//  ? useful for reusing logic

const DashboardWrapper = ({ children }) => {
  <StoreProvider>
    <DashboardLayout>{children}</DashboardLayout>
  </StoreProvider>;
};

export default DashboardWrapper;
