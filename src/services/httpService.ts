import axios from "axios";
import { PostTypes } from "../state/actionTypes";
import { Data } from "../state/context";

async function getPosts(): Promise<[Data]> {
  const response = await axios(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10"
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
  const response = await axios.post(
    `https://jsonplaceholder.typicode.com/posts/`
  );
  console.log(response);

  return response.data;
}

export { getPosts, deletePostServer, addPostServer };
