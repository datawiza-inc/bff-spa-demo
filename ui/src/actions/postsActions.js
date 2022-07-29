import _ from 'lodash';
import jsonPlaceholders from "../apis/jsonPlaceholders";


export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const res = await jsonPlaceholders.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: res.data
    })
  }
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())

  _.chain(getState().posts.posts)
  .map('userId')
  .uniq()
  .forEach(id => dispatch(fetchUser(id)))
  .value()
}

export const fetchUser = (userId) => {
  return async dispatch => {
    const res = await jsonPlaceholders.get('/users/' + userId);
    dispatch({
      type: 'FETCH_USER',
      payload: res.data
    })
  }
}

export const memoizeFetchUser = (userId) => dispatch => {
  _fetchUser(userId, dispatch)
}

const _fetchUser = _.memoize(async (userId, dispatch) => {
  const res = await jsonPlaceholders.get('/users/' + userId);
  dispatch({
    type: 'FETCH_USER',
    payload: res.data
  })
})