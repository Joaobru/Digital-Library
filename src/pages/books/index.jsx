import React from "react";
import "./style.css";
/*Pages Import*/

import HeaderGeneral from "../../components/headerGeneral";
import BreadCrumb from "../../components/breadCrumbs";

function Home() {
  return (
    <>
      <HeaderGeneral />
      <BreadCrumb />
    </>
  );
}
export default Home;
