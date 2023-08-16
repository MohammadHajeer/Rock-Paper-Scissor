export const calculateResult = (user, computer) => {
  // "user" => user won // "computer" => computer won
  if (user.name === computer.name) {
    return "draw";
  }
  switch (user.name) {
    case "scissors": {
      if (computer.name === "paper" || computer.name === "lizard") {
        return "user";
      }
      return "computer";
    }
    case "paper": {
      if (computer.name === "rock" || computer.name === "spock") {
        return "user";
      }
      return "computer";
    }
    case "rock": {
      if (computer.name === "scissors" || computer.name === "lizard") {
        return "user";
      }
      return "computer";
    }
    case "lizard": {
      if (computer.name === "spock" || computer.name === "paper") {
        return "user";
      }
      return "computer";
    }
    case "spock": {
      if (computer.name === "scissors" || computer.name === "rock") {
        return "user";
      }
      return "computer";
    }
    default: {
      return "draw";
    }
  }
};
