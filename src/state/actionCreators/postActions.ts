import {
  addPostServer,
  deletePostServer,
  editPostServer,
  getPosts,
} from "../../services/httpService";
import { PostTypes } from "../actionTypes/PostTypes";
import { Data, PostAction } from "../postReducer";

const initializeData = async (dispatch: React.Dispatch<PostAction>) => {
  dispatch({
    type: PostTypes.LOADING_DATA,
    payload: [],
  });
  try {
    const response = await getPosts();
    dispatch({ type: PostTypes.SUCCESSFULL_DATA, payload: response });
  } catch (e: any) {
    dispatch({ type: PostTypes.ERROR_DATA, payload: e.message });
  }
};

const deletePost = async (
  id: number,
  posts,
  dispatch: React.Dispatch<PostAction>
) => {
  try {
    await deletePostServer(id);
    const updatedPosts: Data[] = posts.data.filter((post) => post.id !== id);
    dispatch({ type: PostTypes.SUCCESSFULL_DATA, payload: updatedPosts });
  } catch (e: any) {
    dispatch({ type: PostTypes.ERROR_DATA, payload: e.message });
  }
};

const addPost = async (
  newObj: Data,
  posts,
  dispatch: React.Dispatch<PostAction>
) => {
  try {
    const response = await addPostServer(newObj);
    if (response) {
      newObj.id = Math.random();
      const updatedPosts: Data[] = [newObj, ...posts.data];
      dispatch({ type: PostTypes.SUCCESSFULL_DATA, payload: updatedPosts });
    }
  } catch (e: any) {
    dispatch({ type: PostTypes.ERROR_DATA, payload: e.message });
  }
};

const editPost = async (
  newObj: Data,
  posts,
  dispatch: React.Dispatch<PostAction>
) => {
  /* Post won't actually stored on fake server so we cannot edit created posts  */
  // created posts id < 1
  try {
    if (newObj.id! >= 1) {
      editPostServer(newObj);
    }
    const updatedPosts: Data[] = posts.data.map((post: Data) =>
      post.id === newObj.id ? newObj : post
    );
    dispatch({ type: PostTypes.SUCCESSFULL_DATA, payload: updatedPosts });
  } catch (e: any) {
    dispatch({ type: PostTypes.ERROR_DATA, payload: e.message });
  }
};

export { initializeData, deletePost, addPost, editPost };
