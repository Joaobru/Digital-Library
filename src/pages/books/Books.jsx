import React from 'react';
import './style.css';
/*Pages Import*/ 
import HeaderGeneral from '../../components/headerGeneral/Header';
import BreadCrumb from '../../components/breadCrumbs/BreadCrumb';

function Home() {
  return (
    <>
      <HeaderGeneral/>
      <BreadCrumb/>
    </>
  );
}
export default Home;