import styles from "styled-components";
import { motion } from "framer-motion";

// Responsive

const responsiveHome = {
  responsive1: `@media screen and (max-width: 1150px)`,
  responsive2: `@media screen and (max-width:900px)`,
  responsive3: `@media screen and (max-width:730px)`,
  responsive4: `@media screen and (max-width:480px)`
};

//

export const HomeWrapper = styles.div`

width: 100%;
height: 100vh;

background: white;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

${responsiveHome.responsive3}{
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

`;

export const LeftRight = styles(motion.div)<{ backColor: string }>`

width: 50%;
height: 100vh;

display: flex;
align-items: center;
justify-content: center;

background: ${({ backColor }) => backColor};

${responsiveHome.responsive3}{
  width: 100%;
  height: 50vh;
}

`;

export const ButtonRoute = styles(motion.button)<{
  buttonColor: string;
  buttonBorder: string;
}>`

color: ${({ buttonColor }) => buttonColor};
font-size: 2.5rem;
font-weight: 500;

padding: .7rem 4rem;

border-radius: .5rem;
border: ${({ buttonBorder }) => buttonBorder};

cursor: pointer;

background: none;
outline: none;

${responsiveHome.responsive1}{
  font-size: 2.2rem;
  padding: .65rem 3.5rem;
};

${responsiveHome.responsive2}{
  font-size: 1.8rem;
  padding: .62rem 3.2rem;
}

${responsiveHome.responsive4}{
  font-size: 1.45rem;
  padding: .6rem 2.1rem;
}

`;
