import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import "./styles.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Slider() {
  const [visibled, setVisibled] = useState(true);
  const [visibledSecondPlain, setVisibledSecondPlain] = useState();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  function handleRight() {
    setVisibled(!visibled);
    setVisibledSecondPlain(!visibledSecondPlain);
  }
  function handleLeft() {
    setVisibled(true);
    setVisibledSecondPlain(false);
  }

  return (
    <>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        <div class="container">
          <a class={visibled ? "item visibled" : "item hidden"}>
            <img src="http://lojasaraiva.vteximg.com.br/arquivos/ids/12109069/1006574337.jpg?v=637142248039070000" alt="Garota do Lago" />
          </a>
          <a class={visibled ? "item visibled" : "item hidden"}>
            <img src="http://lojasaraiva.vteximg.com.br/arquivos/ids/12108078/1008926464.jpg?v=637142244664730000" alt="Garota do Lago" />
          </a>
          <a class={visibled ? "item visibled" : "item hidden"}>
            <img src="http://lojasaraiva.vteximg.com.br/arquivos/ids/12111817/1009977115.jpg?v=637142258528170000" alt="Garota do Lago" />
          </a>
          <a class={visibled ? "item visibled" : "item hidden"}>
            <img src="http://lojasaraiva.vteximg.com.br/arquivos/ids/12563022/1010003826.jpg?v=637152381085230000" alt="Garota do Lago" />
          </a>
          <a class={visibled ? "item visibled" : "item hidden"}>
            <img src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10009549&qld=90&l=830&a=-1=1007943217" alt="" />
          </a>
          <a class={visibled ? "item visibled" : "item hidden"}>
            <img src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10008779&qld=90&l=830&a=-1=1007943217" alt="" />
          </a>
          <a class={visibled ? "item visibled" : "item hidden"}>
            <img src="http://lojasaraiva.vteximg.com.br/arquivos/ids/12106268/1002912379.jpg?v=637142237386570000" alt="" />
          </a>
          <a class={visibled ? "item visibled" : "item hidden"}>
            <img src="http://lojasaraiva.vteximg.com.br/arquivos/ids/9195325/1002912381.jpg?v=637103725454370000" alt="" />
          </a>
          <a class={visibledSecondPlain ? "item visibled" : "item hidden"}>
            <img src="http://lojasaraiva.vteximg.com.br/arquivos/ids/12106266/1002912384.jpg?v=637142237379070000" alt="" />
          </a>
          <a class={visibledSecondPlain ? "item visibled" : "item hidden"}>
            <img src="http://lojasaraiva.vteximg.com.br/arquivos/ids/12106275/1002912388.jpg?v=637142237396400000" alt="" />
          </a>
          <a class={visibledSecondPlain ? "item visibled" : "item hidden"}>
            <img src="http://lojasaraiva.vteximg.com.br/arquivos/ids/12107232/1003275012.jpg?v=637142241303700000" alt="" />
          </a>
          <a class={visibledSecondPlain ? "item visibled" : "item hidden"}>
            <img src="http://lojasaraiva.vteximg.com.br/arquivos/ids/12105642/1002692188.jpg?v=637142234978800000" alt="" />
          </a>
          <a class={visibledSecondPlain ? "item visibled" : "item hidden"}>
            <img src="http://lojasaraiva.vteximg.com.br/arquivos/ids/12105413/1007182452.jpg?v=637142234129570000" alt="" />
          </a>
          <a class={visibledSecondPlain ? "item visibled" : "item hidden"}>
            <img src="http://lojasaraiva.vteximg.com.br/arquivos/ids/12106461/1007577301.jpg?v=637142238191430000" alt="" />
          </a>
          <a class={visibledSecondPlain ? "item visibled" : "item hidden"}>
            <img src="http://lojasaraiva.vteximg.com.br/arquivos/ids/12116996/1008714513.jpg?v=637142277426030000" alt="" />
          </a>
          <a class={visibledSecondPlain ? "item visibled" : "item hidden"}>
            <img src="http://lojasaraiva.vteximg.com.br/arquivos/ids/12107584/1003343223.jpg?v=637142242606100000" alt="" />
          </a>
          
          <div className="left" hidden>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleLeft}
            >
              <MdChevronLeft color="#fff" size={40} />
            </IconButton>
          </div>
          <div className="right">
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleRight}
            >
              <MdChevronRight color="#fff" size={40} />
            </IconButton>
          </div>
        </div>
      </AutoPlaySwipeableViews>
    </>
  );
}

export default Slider;
