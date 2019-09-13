const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOG_IN':
      return { username: action.username };
    case 'LOG_OUT':
      return null;
    default:
      return state;
  }
}
