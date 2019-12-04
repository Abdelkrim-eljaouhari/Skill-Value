const initState = true;
export default (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDE_BAR':
      return !state;
    case 'RESIZE_SIDE_BAR':
      state = false;
      return state;
    default:
      return state;
  }
};
