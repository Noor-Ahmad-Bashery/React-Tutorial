import React, { useContext, useRef, useState } from "react";
import { PostContext } from "../App";

const Post = ({ user }) => {
  const { dispatch } = useContext(PostContext);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const imageInputRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { content, image, user, id: Date.now() };
    dispatch({ type: "ADD_POST", payload: { post } });
    setContent("");
    imageInputRef.current.value = "";
  };

  return (
    <div>
      <h1>Create New Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add new conten"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          ref={imageInputRef}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Post;
