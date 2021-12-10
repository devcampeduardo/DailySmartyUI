import { combineReducers } from 'redux';

import { reducer as Form } from 'redux-form';

import posts from "./postsReducer"

const rootReducer = combineReducers({
  Form,
  posts
});

export default rootReducer;