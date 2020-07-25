import React from 'react';
import './style.css';
/*Photos Import*/ 
import Joao from '../../assets/joao.jpg'
import Luan from '../../assets/luan.jpg'
import Breno from '../../assets/breno.jpg'
import Felipe from '../../assets/felipe.jpg'
import ViniciusCorno from '../../assets/viniciusCorno.jpg'

function Photos() {
  return (
    <div className = "photos">
      <img src={Joao}/>
      <img src={Luan}/>
      <img src={Breno}/>
      <img src={Felipe}/>
      <img src={ViniciusCorno}/>
    </div>
  );
}
export default Photos;