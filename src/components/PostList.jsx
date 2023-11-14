import axios from "axios";
import { useEffect, useState } from "react";

const PostList = () => {
  const [posts, SetPosts] = useState([]);
  useEffect(() => {
    axios
      .get('https://dummyjson.com/posts')
      .then(response => {
          SetPosts(response.data.posts);
          console.log(response.data.posts);
      })
      .catch(error => console.error(error));
  },[]);
    

  return (
      <div>
          <h1>Список постов</h1>
            <ul>
                {posts.map((post) => (
                <li key={post.id}>{post.body}</li>
                ))}
            </ul>
    </div>
  );
};

export default PostList;
