import { postTypes } from "../../Actiontypes/postsTypes";
import { PostsActions, PostsState } from "../../types/types"

const initialState: PostsState = {
  pending: false,
  posts: [],
  myFav: [],
  error: null
};

export default (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case postTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true
      };
    case postTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload.posts,
        error: null
      };
    case postTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error
      };
    case postTypes.ADD_MY_FAV_POST:
      return {
        ...state,
        myFav: [...state?.myFav,action.payload],
      };
    case postTypes.REMOVE_MY_FAV_POST:
      return {
        ...state,
        myFav: state?.myFav?.filter((d) => d.id !== action.payload),
      };
    default:
      return {
        ...state
      };
  }
};

