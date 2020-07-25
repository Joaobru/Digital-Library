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
      <h3 className="TitleFilter">Filtrar por:</h3>
        <select className="Filter" name="filter" >
            <option value="0">Gênero</option>
                <option value="1">Suspence</option>
                <option value="2">Romance</option>
                <option value="3">Terror</option>
                <option value="4">Drama</option>
                <option value="5">Aventura</option>
        </select>
      <h1 className="Title">Destaques</h1>
      <Slider />
      <h1 className="Title">Livros Gratis</h1>
      <Slider />
      <h1 className="Title">Livros Populares</h1>
      <Slider />
    </>
  );
}
export default Home;
