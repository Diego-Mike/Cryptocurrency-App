import styles from "styled-components";

// Responsive

const responsiveRanking = {
  responsive1: `@media screen and (max-width: 1050px)`,
  responsive2: `@media screen and (max-width: 900px)`,
  responsive3: `@media screen and (max-width: 500px)`
};

//

// The ranking itself

export const ContainRanking = styles.div`

width: 100%;
min-height: 65vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

`;

export const NamesRanking = styles.div<{ space: string; border: string }>`

width: 85%;
min-height: 5vh;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

margin: ${({ space }) => space};

&:first-child{
    margin-top: 8rem;
}

&:last-child{
    margin-bottom: 5rem;
}

border-bottom: ${({ border }) => border};

${responsiveRanking.responsive1}{
    width: 90%
}

${responsiveRanking.responsive2}{
    width: 95%
}

${responsiveRanking.responsive3}{
    width: 100%
}

`;

export const CryptoCurrencyName = styles.div`

min-width: 10%;
height: 7vh;

display: flex;
justify-content: center;
align-items: center;

`;

export const CryptoCurrencyImg = styles.div`

min-width: 7%;
height: 7vh;

display: flex;
justify-content: center;
align-items: center;

span{
    width: 30px;
    height: 30px;
     
     img{
         width: 100%;
         height: 100%;
         object-fit: contain;
     }

     ${responsiveRanking.responsive1}{
    width: 25px;
    height: 25px;
}

${responsiveRanking.responsive2}{
    width: 22px;
    height: 22px;
}

}


${responsiveRanking.responsive2}{
    min-width: 0%;
}

`;

export const CryptoCurrencySymbol = styles.div`

min-width: 6.5%;
height: 7vh;

display: flex;
justify-content: center;
align-items: center;

`;

export const CryptoCurrencyRanking = styles.div`

min-width: 5%;
height: 7vh;

display: flex;
justify-content: center;
align-items: center;

${responsiveRanking.responsive2}{
    min-width: 7%;
}

`;

export const CryptoCurrencyPrice = styles.div`

min-width: 15%;
height: 7vh;

display: flex;
justify-content: center;
align-items: center;

${responsiveRanking.responsive3}{
    min-width: 17%;
}

`;

export const CryptoCurrencyChange = styles.div`

min-width: 10%;
height: 7vh;

display: flex;
justify-content: center;
align-items: center;


`;

export const CryptoCurrencyCap = styles.div`

min-width: 15%;
height: 7vh;

display: flex;
justify-content: center;
align-items: center;

${responsiveRanking.responsive3}{
    min-width: 20%;
}

`;

export const CryptoCurrencySpan = styles.span<{
  size: string;
  weight: number;
  itsColor?: string;
}>`

    color: ${({ itsColor }) => itsColor || "white"};

    font-size: ${({ size }) => size};
    font-weight: ${({ weight }) => weight};

`;
