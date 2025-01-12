// export const fetchPosts = async () => {
//   const response = await fetch("httsps://jsonplaceholder.typicode.com/posts");
//   if (!response.ok) {
//     throw new Error("error ribet kalo gak pake axios");
//   } else {
//     return response.json();
//   }
// };

import axios from "axios";

export const getPost = async (page: number) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${page}`
  );
  return response.data;
};

export const updataPost = async (body: any) => {
  const response = await axios.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    body
  );
  return response.data;
};
