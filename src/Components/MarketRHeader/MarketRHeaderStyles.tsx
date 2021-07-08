import styles from "styled-components";

import { DownArrow } from "@styled-icons/boxicons-regular/DownArrow";

// Responsive

const responsiveHeader = {
  responsive1: `@media screen and (max-width: 1000px)`,
  responsive2: `@media screen and (max-width: 680px)`,
  responsive3: `@media screen and (max-width: 380px)`
};

//

// Header

const handleStructure = (structure: string): string => {
  switch (structure) {
    case "obscure":
      return "flex-direction: column; justify-content: center;";
    case "white":
      return "flex-direction: row; justify-content: space-evenly";
    default:
      return "";
  }
};

export const ContainHeader = styles.div<{ structure: string }>`

width: 100%;
min-height: 40vh;

display: flex;
align-items: center;
flex-wrap: wrap;

${({ structure }) => handleStructure(structure)};

${responsiveHeader.responsive2}{
 min-height: 32vh;
}

${responsiveHeader.responsive3}{
  min-height: 28vh;
}


`;

export const TheDropDown = styles.div<{ backgroundColor?: string }>`

width: 100%;

position: absolute;
display: none;
flex-direction: column;

background: ${({ backgroundColor }) => backgroundColor || "rgb(23, 30, 42)"};

span{
    width: 100%;

    font-size: 1.5rem;
    color: white;
    font-weight: 300;

    padding: 2rem;

    text-align: center;

    cursor: pointer;

    &:first-child{
        padding-top: 3rem;
    }

    &:last-child{
        margin-bottom: 2.5rem;
    }

    ${responsiveHeader.responsive1}{
      font-size: 1.3rem;
      padding: 1.8rem;

      &:first-child{
        padding-top: 2.5rem;
    }

    &:last-child{
        margin-bottom: 2rem;
    }

}

    ${responsiveHeader.responsive2}{
      font-size: 1.2rem;
      padding: 1.6rem;

      &:first-child{
        padding-top: 2.2rem;
    }

    &:last-child{
        margin-bottom: 1.5rem;
    }

}

${responsiveHeader.responsive3}{
  font-size: 1.1rem;
  padding: 1.5rem;

  &:first-child{
    padding-top: 2.1rem;
}

&:last-child{
    margin-bottom: 1.4rem;
}

}

}

`;

export const DropdownHero = styles.div`

position: relative;

h1{
    color: white;
    font-size: 2.8rem;
    font-weight: 400;
    padding-bottom: 1.2rem;

    display: block;

    span{
        padding-left: 5rem;
    }

    ${responsiveHeader.responsive1}{
  font-size: 2.5rem;
}

    ${responsiveHeader.responsive2}{
      font-size: 2.2rem;
}

    ${responsiveHeader.responsive3}{
  font-size: 1.9rem;
}

}

&:hover ${TheDropDown}{
display: flex;
}

margin-top: 4.5rem;



`;

export const DownIcon = styles(DownArrow)<{ color?: string }>`

color: ${({ color }) => color || "white"};
width: 35px;

${responsiveHeader.responsive1}{
  width: 30px;
}

    ${responsiveHeader.responsive2}{
      width: 27px;
}

${responsiveHeader.responsive3}{
  width: 24px;
}

`;

// Header - current currency

export const Currency = styles.div`

padding-top: 5rem;

h2{

 color: white;
 font-size: 1.7rem;
 font-weight: 300;

 ${responsiveHeader.responsive1}{
  font-size: 1.6rem;
}

    ${responsiveHeader.responsive2}{
      font-size: 1.5rem;
}

${responsiveHeader.responsive2}{
  font-size: 1.35rem;
}

}

`;
