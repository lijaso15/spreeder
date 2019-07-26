const wpm = (state = 300, action) => {
  switch (action.type) {
    case "WPM":
      return action.wpm;
    default:
      return state;
  }
};

export default wpm;
