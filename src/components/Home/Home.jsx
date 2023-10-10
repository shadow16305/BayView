import React, { Fragment } from "react";
import Header from "./Header";
import About from "./About";
import Facilities from "./Facilities";
import WorkHours from "./WorkHours";
import SavedHearts from "./SavedHearts";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Facilities />
      <WorkHours />
      <SavedHearts />
      <Team />
      <Testimonials />
      <Contact />
    </Fragment>
  );
};

export default Home;
