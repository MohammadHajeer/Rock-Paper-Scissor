import lizardIcon from "../images/icon-lizard.svg";
import rockIcon from "../images/icon-rock.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import spockIcon from "../images/icon-spock.svg";
import paperIcon from "../images/icon-paper.svg";

export const buttonDetails = [
  {
    id: 1,
    imgSrc: lizardIcon,
    name: "lizard",
    positions: "bottom-0 left-0 translate-y-1/2",
  },
  {
    id: 2,
    imgSrc: rockIcon,
    name: "rock",
    positions: "bottom-0 right-0 translate-y-1/2",
  },
  {
    id: 3,
    imgSrc: scissorsIcon,
    name: "scissors",
    positions: "top-0 left-1/2 -translate-y-1/2 -translate-x-1/2",
  },
  {
    id: 4,
    imgSrc: spockIcon,
    name: "spock",
    positions: "top-0 left-0 translate-y-1/3 -translate-x-1/2",
  },
  {
    id: 5,
    imgSrc: paperIcon,
    name: "paper",
    positions: "top-0 right-0 translate-y-1/3 translate-x-1/2",
  },
];
