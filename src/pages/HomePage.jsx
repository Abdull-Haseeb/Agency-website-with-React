import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Features from "../components/Features";

import Blog from "../components/Blog";
import Team from "./../components/Team";
import Statistic from "../components/Statistic";
import { Faq } from "./../components/Faq";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Blog />
      <Team />
      <Statistic />
      <Faq />
      <Footer />
    </>
  );
};

export default HomePage;
