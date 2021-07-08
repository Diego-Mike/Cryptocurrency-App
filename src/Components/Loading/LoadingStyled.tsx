import styles from "styled-components";

// Responsive

const responsiveLoading = {
  responsive1: `@media screen and (max-width: 1100px)`,
  responsive2: `@media screen and (max-width: 750px)`,
  responsive3: `@media screen and (max-width: 600px)`,
  responsive4: `@media screen and (max-width: 450px)`,
  responsive5: `@media screen and (max-width: 350px)`
};

//

export const LoadingWrapper = styles.div`

width: 100%;
height: 100vh;

display: flex;
align-items: center;
justify-content: center;

background: rgba(15, 15, 15);

 div{
     
    width: 20%;
     
    border-radius: 1rem;
    background: none;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
       color: white;
       font-size: 1.45rem;
       font-weight: 400;
       padding-top: 4rem;
    }

    ${responsiveLoading.responsive1}{
       width: 30%;
    }

    ${responsiveLoading.responsive2}{
      width: 40%;
   }

   ${responsiveLoading.responsive3}{
      width: 50%;
   }

   ${responsiveLoading.responsive4}{
      width: 60%;
   }

   ${responsiveLoading.responsive5}{
      width: 63%;
   }

}

`;
