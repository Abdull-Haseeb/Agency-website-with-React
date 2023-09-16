import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Features from "../components/Features";
// import SignUp from "./../components/SignUp";
// import { Routes, Route } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Features id="features" />
    </>
  );
};

export default HomePage;
