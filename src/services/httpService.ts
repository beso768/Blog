import axios from "axios";
import { PostTypes } from "../state/actionTypes/PostTypes";
import { Data } from "../state/postReducer";

async function getPosts(): Promise<Data[]> {
  const response = await axios(
    "https://jsonplaceholder.typicode.cm/posts?_start=0&_limit=10"
  );
  return response.data;
}
async function deletePostServer(id: number) {
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.data;
}

async function addPostServer(newObj: Data) {
  /* Post won't actually stored on fake server so we cannot edit created posts  */
  const response = await axios.post(
    `https://jsonplaceholder.typicode.com/posts/`
  );
  return response.data;
}
async function editPostServer(newObj: Data) {
  const response = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${newObj.id}`,
    newObj
  );
  return response.data;
}

export { getPosts, deletePostServer, addPostServer, editPostServer };
