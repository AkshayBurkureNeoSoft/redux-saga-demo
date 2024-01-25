import { IPost } from "../../models/IPost";
import { postTypes } from "../Actiontypes/postsTypes";

export interface PostsState {
  pending: boolean;
  posts: IPost[];
  myFav:IPost[];
  error: string | null;
}

export interface FetchPostsSuccessPayload {
  posts: IPost[];
}




export interface FetchPostsFailurePayload {
  error: string;
}

export interface FetchPostsRequest {
  type: typeof postTypes.FETCH_POST_REQUEST;
}

export type FetchPostsSuccess = {
  type: typeof postTypes.FETCH_POST_SUCCESS;
  payload: FetchPostsSuccessPayload;
};
export interface AddMyFavPosts {
  type: typeof postTypes.ADD_MY_FAV_POST;
  payload: any;
}

export interface RemoveMyFavPosts {
  type: typeof postTypes.REMOVE_MY_FAV_POST;
  payload: any;
}

export type FetchPostsFailure = {
  type: typeof postTypes.FETCH_POST_FAILURE;
  payload: FetchPostsFailurePayload;
};



export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure 
  | AddMyFavPosts 
  | RemoveMyFavPosts;
