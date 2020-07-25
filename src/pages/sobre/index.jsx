import React from 'react';
import './style.css';

/*Import Components*/ 
import Header from '../../components/headerGeneral';
import BreadCrumb from '../../components/breadCrumbs';
import TextSobre from '../../components/textSobre';
import Photos from '../../components/photos';

function Sobre() {
  return(
    <>
      <Header/>
      <BreadCrumb/>
      <Photos/>
      <TextSobre/>
    </>
  );
}

export default Sobre;