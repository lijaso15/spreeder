const spreeding = (state = false, action) => {
  switch (action.type) {
    case "SPREEDING_ON":
      return true;
    case "SPREEDING_OFF":
      return false;
    default:
      return state;
  }
};
export default spreeding;
