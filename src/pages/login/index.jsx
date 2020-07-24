import React from 'react';
import './style.css';
/*Import Components*/
import HeaderHome from '../../components/headerHome/Header';
import BreadCrumb from '../../components/breadCrumbs/BreadCrumb';

function Login() {
  return (
    <>
      <HeaderHome/>
      <BreadCrumb/>
    </>
  );
}
export default Login;