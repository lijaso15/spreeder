const text = (state = "", action) => {
  switch (action.type) {
    case "TEXT":
      return action.text;
    default:
      return state;
  }
};

export default text;
