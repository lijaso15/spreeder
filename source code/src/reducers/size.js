const size = (state = 30, action) => {
  switch (action.type) {
    case "FONT":
      return action.size;
    default:
      return state;
  }
};
export default size;
