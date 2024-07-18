import React, { createContext, useContext } from "react";
import { UserContext, PostContext } from "../../App";

const SinglePost = ({ image, content, user, id }) => {
  const currentUser = useContext(UserContext);
  const isCurrentUser = currentUser === user;
  const { dispatch } = useContext(PostContext);

  function handleDeletPost() {
    dispatch({ type: "DELETE_POST", payload: { id } });
  }
  return (
    <div>
      <>
        {image && (
          <img
            style={{ height: 200, width: 200, objectFit: "cover" }}
            src={URL.createObjectURL(image)}
            alt="post cover"
          />
        )}
        <p>{content}</p>
        <p style={{ color: isCurrentUser && "green" }}>{user}</p>
        <div>
          {isCurrentUser && <button onClick={handleDeletPost}>Delete</button>}
        </div>
      </>
    </div>
  );
};

export default SinglePost;
