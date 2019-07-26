const words = (state = 1, action) => {
  switch (action.type) {
    case "WORDS":
      return action.words;
    default:
      return state;
  }
};

export default words;
