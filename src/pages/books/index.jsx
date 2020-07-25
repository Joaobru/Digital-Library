import React from "react";
import "./style.css";
/*Pages Import*/

import HeaderGeneral from "../../components/headerGeneral";
import BreadCrumb from "../../components/breadCrumbs";
import Slider from "../../components/Slider";

function Home() {
  return (
    <>
      <HeaderGeneral />
      <BreadCrumb />
      <Slider />
    </>
  );
}
export default Home;
