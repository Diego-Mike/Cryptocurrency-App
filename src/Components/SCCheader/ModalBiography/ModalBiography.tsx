import React from "react";

import {
  ModalWrapper,
  ModalContain,
  ModalContainHeader,
  ModalContainText
} from "./ModalBiographyStyled";

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  infoData: string;
  infoImg: string;
  infoName: string;
}

const ModalBiography: React.FC<IProps> = ({
  setIsOpen,
  infoData,
  infoImg,
  infoName
}) => {
  // Framer Motion

  const Slide = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } }
  };

  const SlideData = {
    hidden: { x: -2500 },
    visible: { x: 0, transition: { delay: 0.4, duration: 0.4 } }
  };

  const PopUpText = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 0.3 } }
  };

  return (
    <>
      <ModalWrapper
        onClick={() => {
          setIsOpen(false);
          document.body.style.overflow = "auto";
        }}
        variants={Slide}
        initial="hidden"
        animate="visible"
      >
        <ModalContain
          variants={SlideData}
          initial="hidden"
          animate="visible"
          onClick={(e: React.SyntheticEvent): void => e.stopPropagation()}
        >
          {/* Header */}
          <ModalContainHeader
            variants={PopUpText}
            initial="hidden"
            animate="visible"
          >
            <img src={infoImg} alt="" />
            <h2> {infoName} </h2>
          </ModalContainHeader>
          {/* Text */}
          <ModalContainText
            variants={PopUpText}
            initial="hidden"
            animate="visible"
          >
            <p>{infoData}</p>
          </ModalContainText>
        </ModalContain>
      </ModalWrapper>
    </>
  );
};

export default ModalBiography;
