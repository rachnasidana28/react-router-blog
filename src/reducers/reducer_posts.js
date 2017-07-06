import _ from 'lodash';
import {NEW_POST , FETCH_POST_BY_ID, FETCH_POSTS} from '../actions';

export default function(state={}, action){

  switch(action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    // case NEW_POST:
    //   console.log(action.payload);
    case FETCH_POST_BY_ID:
      const post = action.payload.data;
      // const newState =  { ...state,  };
      // newState[post.id] = post;
      // return newState;


      // square brackets mean make a new key on this object
      return { ...state , [post.id]: post};

    default:
      return state;
  }
}
