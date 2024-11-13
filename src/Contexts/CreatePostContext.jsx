import { createContext, useState } from "react";

export const CreatePostContext = createContext();
export const PostErrorContext = createContext();

export const CreatePostProvider = ({ children }) => {
  const [createPost, setCreatePost] = useState(false);

  return (
    <CreatePostContext.Provider value={{ createPost, setCreatePost }}>
      {children}
    </CreatePostContext.Provider>
  );
};

export const PostErrorProvider = ({ children }) => {
  const [postError, setPostError] = useState(false);

  return (
    <PostErrorContext.Provider value={{ postError, setPostError }}>
      {children}
    </PostErrorContext.Provider>
  );
};
