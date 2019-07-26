const lines = (state = 1, action) => {
  switch (action.type) {
    case "LINES":
      return action.lines;
    default:
      return state;
  }
};

export default lines;
