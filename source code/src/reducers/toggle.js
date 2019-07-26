const toggle = (
  state = {
    spreed: true
  },
  action
) => {
  switch (action.type) {
    case "TOGGLE_BREADCRUMB":
      return { ...state, spreed: !state.spreed };
    default:
      return state;
  }
};

export default toggle;
