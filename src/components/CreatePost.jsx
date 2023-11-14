// import { useState } from "react";

// const CreatePost = () => {
//   const [inputData, SetInputData] = useState("");
//   console.log(inputData);

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputData}
//         onChange={(e) => SetInputData(e.target.value)}
//       />
//       <button>Create Post</button>
//     </div>
//   );
// };

// export default CreatePost;

import { useState } from "react";

const CreatePost = () => {
  const [inputData, setInputData] = useState("");
  const [posts, setPosts] = useState([]);

  const handleCreatePost = () => {
    // Проверяем, что введенные данные не пусты перед добавлением
    if (inputData.trim() !== "") {
      setPosts((prevPosts) => [...prevPosts, inputData]);
      setInputData(""); // Очищаем введенные данные после добавления
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={handleCreatePost}>Create Post</button>

      <div>
        {/* Отображаем посты из массива */}
        {posts.map((post, index) => (
          <p key={index}>{post}</p>
        ))}
      </div>
    </div>
  );
};

export default CreatePost;
