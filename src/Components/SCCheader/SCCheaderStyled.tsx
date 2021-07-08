import styles from "styled-components";
import { motion } from "framer-motion";

//

const responsiveHeader = {
  responsive1: `@media screen and (max-width: 800px)`,
  responsive2: `@media screen and (max-width:670px)`,
  responsive3: `@media screen and (max-width:626px)`,
  responsive4: `@media screen and (max-width:473px)`
};

//

export const SearchCurrency = styles.input`

width: 23%;

color: rgb(35, 35, 35);
font-size: 2.45rem;
font-weight: 300;

background: none;
border: none;
outline: none;

margin-top: 4rem;

${responsiveHeader.responsive1}{
    width: 35%;
    font-size: 2.2rem;
}

${responsiveHeader.responsive2}{
    width: 40%;
    font-size: 2rem;
    margin-right: 2rem;
    margin-left: 2em;
}

${responsiveHeader.responsive4}{
    margin-top: .5rem;
}

`;

export const ButtonSpan = styles(motion.span)`

background: none;
padding-right: 4rem;
padding-left: 2rem;

cursor: pointer;

img{

    width: 40px;
    height: 40px;

    ${responsiveHeader.responsive2}{
        width: 32px;
        height: 32px;
    }

}

margin-top: 5rem;

${responsiveHeader.responsive3}{
    padding-right: 3rem;
    padding-left: 3rem;
    margin-top: 1rem;
}

`;

export const MoreInformation = styles.div`

width: 100%;

display: flex;
align-items: center;
justify-content: center;

span{
    font-size: 1.65rem;
    font-weight: 500;

    cursor: pointer;
    text-decoration: underline
}

margin-top: 1rem;

`;
