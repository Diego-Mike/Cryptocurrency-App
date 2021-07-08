import React from "react";
import { useMediaQuery } from "react-responsive";

import { HomeWrapper, LeftRight, ButtonRoute } from "./HomeStyled";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  // React responsive

  const isMobile = useMediaQuery({ query: "(max-width: 730px)" });

  // Framer motion

  const ChangeBackground1 = {
    hidden: { x: "0%" },
    visible: {
      x: "100%",
      transition: { delay: 1, duration: 0.6 }
    }
  };

  const ChangeBackground2 = {
    hidden: { x: "0%" },
    visible: {
      x: "-100%",
      transition: { delay: 1, duration: 0.6 }
    }
  };

  // Framer motion - change animation when max-width: 730px

  const ChangeBackground3 = {
    hidden: { y: "0%" },
    visible: {
      y: "100%",
      transition: { delay: 1, duration: 0.6 }
    }
  };

  const ChangeBackground4 = {
    hidden: { y: "0%" },
    visible: {
      y: "-100%",
      transition: { delay: 1, duration: 0.6 }
    }
  };

  const PopUpButton1 = {
    hidden: { y: 65, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 2, duration: 0.5 } }
  };

  const PopUpButton2 = {
    hidden: { y: -65, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 2, duration: 0.5 } }
  };

  return (
    <HomeWrapper>
      {!isMobile ? (
        <>
          <LeftRight
            variants={ChangeBackground1}
            initial="hidden"
            animate="visible"
            backColor="rgba(255,255,255,0.98)"
          >
            <ButtonRoute
              variants={PopUpButton1}
              initial="hidden"
              animate="visible"
              onClick={() => history.push("/single/crypto/currency")}
              whileTap={{ scale: 0.9 }}
              buttonColor="rgb(23, 30, 42)"
              buttonBorder="2px solid rgb(23, 30, 42)"
            >
              Search Crypto Currency
            </ButtonRoute>
          </LeftRight>

          <LeftRight
            variants={ChangeBackground2}
            initial="hidden"
            animate="visible"
            backColor="rgb(23, 30, 42)"
          >
            <ButtonRoute
              variants={PopUpButton2}
              initial="hidden"
              animate="visible"
              onClick={() => history.push("/ranking")}
              whileTap={{ scale: 0.9 }}
              buttonColor="rgba(255,255,255,0.98)"
              buttonBorder="2px solid rgba(255,255,255,0.98)"
            >
              Crypto Currency Ranking
            </ButtonRoute>
          </LeftRight>
        </>
      ) : (
        <>
          <LeftRight
            variants={ChangeBackground3}
            initial="hidden"
            animate="visible"
            backColor="rgba(255,255,255,0.98)"
          >
            <ButtonRoute
              variants={PopUpButton1}
              initial="hidden"
              animate="visible"
              onClick={() => history.push("/single/crypto/currency")}
              whileTap={{ scale: 0.9 }}
              buttonColor="rgb(23, 30, 42)"
              buttonBorder="2px solid rgb(23, 30, 42)"
            >
              Search Crypto Currency
            </ButtonRoute>
          </LeftRight>

          <LeftRight
            variants={ChangeBackground4}
            initial="hidden"
            animate="visible"
            backColor="rgb(23, 30, 42)"
          >
            <ButtonRoute
              variants={PopUpButton2}
              initial="hidden"
              animate="visible"
              onClick={() => history.push("/ranking")}
              whileTap={{ scale: 0.9 }}
              buttonColor="rgba(255,255,255,0.98)"
              buttonBorder="2px solid rgba(255,255,255,0.98)"
            >
              Crypto Currency Ranking
            </ButtonRoute>
          </LeftRight>
        </>
      )}
    </HomeWrapper>
  );
};

export default Home;
