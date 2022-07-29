import { combineReducers } from 'redux';
import postsReducers from './postsReducers';
import usersReducer from './usersReducer';


export default combineReducers({
  users: usersReducer,
  posts: postsReducers 
});
