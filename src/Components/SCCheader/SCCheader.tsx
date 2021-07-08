import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { GetSCC } from "../../actions/SCCactions";
import { Isearch } from "../../Website/SingleCryptoCurrency/SingleCryptoCurrency";

import {
  ContainHeader,
  DropdownHero,
  DownIcon,
  TheDropDown
} from "../MarketRHeader/MarketRHeaderStyles";
import { SearchCurrency, ButtonSpan, MoreInformation } from "./SCCheaderStyled";

import Coin from "./currency.svg";
import { ReducerType } from "../..";
import ModalBiography from "./ModalBiography/ModalBiography";

interface IProps {
  search: Isearch;
  setSearch: React.Dispatch<React.SetStateAction<Isearch>>;
}

const SCCheader: React.FC<IProps> = ({ search, setSearch }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  // The search

  const SingleSearch = (): void => {
    dispatch(GetSCC(search.coin));
  };

  const isUndefined = useSelector(
    (state: ReducerType) => state.SCryptoCurrency
  );

  // Framer - motion

  const Actions = {
    hover: {
      color: "#ff9a16",
      boxShadow: "0px 15px 10px -16.5px #ff9a16"
    },
    tap: {
      color: "rgb(19, 255, 137)",
      boxShadow: "0px 15px 10px -16.5px rgb(19, 255, 137)"
    }
  };

  return (
    // Header - White website

    <ContainHeader style={{ minHeight: "40vh" }} structure="white">
      {/* Dropdown */}
      <DropdownHero style={{ marginRight: "3rem", marginLeft: "3rem" }}>
        <h1 style={{ color: "rgb(30, 30, 30)" }}>
          Currency
          <span>
            <DownIcon color="rgb(30, 30, 30)" />
          </span>
        </h1>

        {/* Dropdow itself */}

        <TheDropDown backgroundColor="white">
          <motion.span
            style={{ color: "rgb(35, 35, 35)", fontWeight: 400 }}
            variants={Actions}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setSearch({ ...search, currency: "US$" })}
          >
            USD (US$)
          </motion.span>

          <motion.span
            style={{ color: "rgb(35, 35, 35)", fontWeight: 400 }}
            variants={Actions}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setSearch({ ...search, currency: "€" })}
          >
            EUR (€)
          </motion.span>

          <motion.span
            style={{ color: "rgb(35, 35, 35)", fontWeight: 400 }}
            variants={Actions}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setSearch({ ...search, currency: "¥" })}
          >
            JPY (¥)
          </motion.span>

          <motion.span
            style={{ color: "rgb(35, 35, 35)", fontWeight: 400 }}
            variants={Actions}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setSearch({ ...search, currency: "£" })}
          >
            GBP (£)
          </motion.span>
        </TheDropDown>
      </DropdownHero>

      {/* Input */}
      <SearchCurrency
        type="text"
        name="icon"
        placeholder="Example: dogecoin"
        value={search.coin}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch({
            ...search,
            coin: e.target.value
              .toLowerCase()
              .trim()
              .replace(/\s/g, "")
          })
        }
      />

      {/* Button */}

      {search.coin.trim() === "" || search.currency.trim() === "" ? (
        <ButtonSpan style={{ opacity: 0.5 }}>
          <img src={Coin} alt="" />
        </ButtonSpan>
      ) : (
        <ButtonSpan
          whileHover={{ scale: 1.25, rotateZ: 80 }}
          whileTap={{ scale: 1.1, rotateZ: -80 }}
          onClick={SingleSearch}
        >
          <img src={Coin} alt="" />
        </ButtonSpan>
      )}

      {/* More Information */}

      {isUndefined.data !== undefined && (
        <MoreInformation>
          <span
            onClick={() => {
              setIsOpen(true);
              document.body.style.overflow = "hidden";
            }}
          >
            More Information
          </span>
        </MoreInformation>
      )}

      {/* More Information - Modal Window */}

      {isUndefined.data !== undefined && isOpen && (
        <ModalBiography
          setIsOpen={setIsOpen}
          infoImg={isUndefined.data.image.large}
          infoData={isUndefined.data.description.en}
          infoName={isUndefined.data.name}
        />
      )}
    </ContainHeader>
  );
};

export default SCCheader;
