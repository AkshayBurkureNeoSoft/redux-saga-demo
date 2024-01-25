import React, { useEffect } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IPost } from "../../models/IPost";
import { fetchPostsRequest , addMyFavPost, removeMyFavPost} from "../../_redux/action/postsActions/postsActions";
import { RootState } from "../../_redux/reducers/rootReducer";

const PostComponent = () =>{
    const dispatch = useDispatch();
    const { pending, posts, error ,myFav} = useSelector(
        (state: RootState) => state.posts
    );

    useEffect(()=>{
        dispatch(fetchPostsRequest())
    },[]);

    
    console.log('post my fav',myFav);
    
    return(
        <div style={{
            'display': 'flex'
        }}>
            <div>
                <h3>All Post ({posts?.data?.length})</h3>
                {
                    posts?.data?.map((d:IPost,i:number)=>{
                        return <p key={i}>
                                {d.title}
                                <button disabled={myFav?.some((fv:IPost) => fv.id ===  d.id)}  onClick={()=>{
                                    dispatch(addMyFavPost(d))
                                }}> ADD </button>
                                </p>
                    })
                }
            </div>

            <div>
                <h3>My Fav Post ({myFav?.length})</h3>
                {
                    myFav?.map((d:IPost,i:number)=>{
                        return <p key={i}>{d.title}
                        <button  onClick={()=>{
                                    dispatch(removeMyFavPost(d?.id))
                                }}> Remove </button>
                        </p>
                    })
                }
            </div>
            
        </div>
    )
}


export default PostComponent;