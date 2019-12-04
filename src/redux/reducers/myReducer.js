const initState = true;
function myReducer(state = true, action) {
  switch (action.type) {
    case 'TOGGLE_SIDE_BAR':
      return !state;
    case 'RESIZE_SIDE_BAR':
      state = false;
      return state;
    default:
      return state;
  }
}

export default myReducer;
