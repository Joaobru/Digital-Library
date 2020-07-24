import React from 'react';
import './style.css';

/*Import Components*/ 
import Header from '../../components/headerGeneral/Header';
import BreadCrumb from '../../components/breadCrumbs/BreadCrumb';
import TextSobre from '../../components/textSobre/index';
import Photos from '../../components/photos/index';

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