import { Routes, Route } from "react-router-dom";

import "./App.css";
import CreatePost from "./components/CreatePost";
import Error from "./components/Error";
import PostList from "./components/PostList";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostList />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
