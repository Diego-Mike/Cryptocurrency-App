import styles from "styled-components";

// Responsive

const responsiveError = {
  responsive1: `@media screen and (max-width:1100px)`,
  responsive2: `@media screen and (max-width:800px)`,
  responsive3: `@media screen and (max-width:600px)`,
  responsive4: `@media screen and (max-width:450px)`,
  responsive5: `@media screen and (max-width:350px)`
};

//

export const ErrorWrapper = styles.div`

width: 100%;
height: 100vh;
      
background: rgba(5,5,5);

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

`;

export const ErrorSVG = styles.img`

width: 35%;

${responsiveError.responsive1}{
    width: 50%;
}

${responsiveError.responsive2}{
    width: 65%;
}

${responsiveError.responsive3}{
    width: 80%;
}

${responsiveError.responsive4}{
    width: 87%;
}

${responsiveError.responsive5}{
    width: 90%;
}

`;

export const ErrorText = styles.p`

color: white;
font-size: 1.5rem;
font-weight: 400;

text-align: center;


span{
    color: #F9A826;
    cursor: pointer;
}

`;

export const ErrorTextCapital = styles.span`

color: white;
font-size: 3rem;
font-weight: 500;

`;
