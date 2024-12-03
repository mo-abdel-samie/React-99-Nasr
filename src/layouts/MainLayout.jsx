import React from "react";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <MainNavbar />
      {children}
      <Footer />
    </>
  );
}
