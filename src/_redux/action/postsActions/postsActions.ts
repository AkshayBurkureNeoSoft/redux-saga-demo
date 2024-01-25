import { postTypes } from "../../Actiontypes/postsTypes";
import {
  AddMyFavPosts,
  
  FetchPostsFailure,
  FetchPostsFailurePayload,
  FetchPostsRequest,
  FetchPostsSuccess,
  FetchPostsSuccessPayload
} from "../../types/types";

export const fetchPostsRequest  = () : any => ({
  type: postTypes.FETCH_POST_REQUEST
});

export const fetchPostsSuccess = (
  payload: FetchPostsSuccessPayload
): FetchPostsSuccess => ({
  type: postTypes.FETCH_POST_SUCCESS,
  payload
});

export const addMyFavPost = (
  payload: any
): any => ({
  type: postTypes.ADD_MY_FAV_POST,
  payload
});

export const removeMyFavPost = (payload:any) : any =>(
  {
    type:postTypes.REMOVE_MY_FAV_POST,
    payload
  }
)

export const fetchPostsFailure = (
  payload: FetchPostsFailurePayload
): FetchPostsFailure => ({
  type: postTypes.FETCH_POST_FAILURE,
  payload
});
