import React from "react";
import HeaderHome from "../../components/headerHome";
import BreadCrumb from "../../components/breadCrumbs";
import Slider from "../../components/Slider";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import "./style.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "block",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    boxShadow: "2px 2px 2px rgba(0,0,0,0.4)",
  },
  img: {
    height: "18%",
    display: "block",
    overflow: "hidden",
    width: "98%",
  },
}));

const tutorialSteps = [
  {
    label: "Promoção de Livros",
    imgPath:
      "https://lojasaraiva.vteximg.com.br/arquivos/ids/20923452/1307_tv_dia-dos-pais-leve-3.png?v=637308193101530000",
  },
  {
    label: "Promoção de Livros",
    imgPath:
      "https://lojasaraiva.vteximg.com.br/arquivos/ids/20923457/1617_tv_faro-editorial.png?v=637305935878900000",
  },
  {
    label: "Promoção de Livros",
    imgPath:
      "https://lojasaraiva.vteximg.com.br/arquivos/ids/20923458/1607_tv_aparador-de-livros.png?v=637305936193870000",
  },
  {
    label: "Promoção de Livros",
    imgPath:
      "https://lojasaraiva.vteximg.com.br/arquivos/ids/20923454/1607_tv_centenas-de-livros.png?v=637305930541430000",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://lojasaraiva.vteximg.com.br/arquivos/ids/20923455/1617_tv_complete-sua-colecao.png?v=637305932733230000",
  },
];

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div className="Body">
        <HeaderHome />
        <div className={classes.root}>
          <BreadCrumb />
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {tutorialSteps.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </div>

        {/* ITEMS DE HOME */}

        {/* LIVROS DE AVENTURA */}

        <h1 className="Title">Livros</h1>
        <Slider />
      </div>
    </>
  );
}
export default Home;
