import styles from "styled-components";
import { motion } from "framer-motion";

// Responsive

const responsiveModal = {
  responsive1: `@media screen and (max-width: 1100px)`,
  responsive2: `@media screen and (max-width: 1070px)`,
  responsive3: `@media screen and (max-width: 850px)`,
  responsive4: `@media screen and (max-width: 500px)`,
  responsive5: `@media screen and (max-width: 450px)`
};

//

export const ModalWrapper = styles(motion.div)`

width: 100%;
min-height: 100%;

position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;

background: rgba(0,0,0, 0.5);

overflow-y: auto;

`;

export const ModalContain = styles(motion.div)`

margin: 0 auto;

width: 75%;
min-height: 85vh;
margin-top: 5rem;
margin-bottom: 3.5rem;

border-radius: .4rem;
background: rgba(252,252,252);

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

overflow: hidden;

${responsiveModal.responsive2}{
    width: 80%;
}

${responsiveModal.responsive3}{
    width: 85%;
}


`;

export const ModalContainHeader = styles(motion.div)`

width: 90%;
max-height: 15vh;

margin: 0 auto;
margin-top: 3.5rem;

display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

img{
    width: 8%;
}

h2{
    font-size: 4rem;
}

${responsiveModal.responsive3}{
    img{
        width: 9%;
    }
    h2{
        font-size: 3.3rem;
    }
}

${responsiveModal.responsive4}{
    img{
        width: 11%;
    }
    h2{
        font-size: 2.8rem;
    }
}

${responsiveModal.responsive5}{
    img{
        width: 12.5%;
    }
    h2{
        font-size: 2.6rem;
    }
}

`;

export const ModalContainText = styles(motion.div)`

max-width: 92%;
min-height: 65vh;

margin: 0 auto;
margin-top: 5rem;
margin-bottom: 4rem;

overflow: hidden;

p{

    font-size: 1.8rem;
    font-weight: 300;
    
    letter-spacing: .3rem;
    text-align: left;

    ${responsiveModal.responsive1}{
        font-size: 1.6rem;
        letter-spacing: .35rem;
    }

    ${responsiveModal.responsive2}{
        font-size: 1.45rem;
       
    }

    ${responsiveModal.responsive3}{
        font-size: 1.35rem;
       
    }

    ${responsiveModal.responsive4}{
        font-size: 1.3rem;
       
    }

}

`;
