import { combineReducers } from "redux";
import postReducer from "./postsReducer/postsReducer";

const rootReducer : any = combineReducers({
  posts: postReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
