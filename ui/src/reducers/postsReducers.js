
const defaultState = {
  posts: [],
  loading: true
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    default:
      return state
  }
}