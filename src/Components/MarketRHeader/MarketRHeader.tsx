import React from "react";
import { motion } from "framer-motion";

import {
  ContainHeader,
  DropdownHero,
  DownIcon,
  TheDropDown,
  Currency
} from "./MarketRHeaderStyles";

// Props from MarketRanking

interface Props {
  ChangeCurrency: (currency: string, symbol: string) => void;
  currentCurrency: string;
}

const MarketRHeader: React.FC<Props> = ({
  ChangeCurrency,
  currentCurrency
}) => {
  // Framer motion

  const Actions = {
    hover: {
      color: "rgb(162, 255, 239)",
      boxShadow: "0px 15px 10px -16.5px rgb(162, 255, 239)"
    },
    tap: {
      color: "rgb(75, 255, 165)",
      boxShadow: "0px 15px 10px -16.5px rgb(75, 255, 165)"
    }
  };

  return (
    <>
      {/* Header */}

      <ContainHeader structure="obscure">
        <DropdownHero>
          <h1>
            Select Currency
            <span>
              <DownIcon />
            </span>
          </h1>

          {/* The Dropdown Itself */}

          <TheDropDown>
            <motion.span
              onClick={() => ChangeCurrency("usd", "$")}
              variants={Actions}
              whileHover="hover"
              whileTap="tap"
            >
              USD (US$)
            </motion.span>

            <motion.span
              onClick={() => ChangeCurrency("eur", "€")}
              variants={Actions}
              whileHover="hover"
              whileTap="tap"
            >
              EUR (€)
            </motion.span>

            <motion.span
              onClick={() => ChangeCurrency("jpy", "¥")}
              variants={Actions}
              whileHover="hover"
              whileTap="tap"
            >
              JPY (¥)
            </motion.span>

            <motion.span
              onClick={() => ChangeCurrency("gbp", "£")}
              variants={Actions}
              whileHover="hover"
              whileTap="tap"
            >
              GBP (£)
            </motion.span>
          </TheDropDown>
        </DropdownHero>

        {/* type of current currency */}

        <Currency>
          <h2>Current Currency &nbsp; {currentCurrency}</h2>
        </Currency>
      </ContainHeader>
    </>
  );
};

export default MarketRHeader;
