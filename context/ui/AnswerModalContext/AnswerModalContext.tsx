import React, { PropsWithChildren, useContext, useState } from "react";
import Post from "../../../models/post";
import { UserInfo } from "../../../models/user";

interface AnswerModalContextProps {
  isOpen: boolean;
  setOpen: (x: boolean) => void;
  userInfo: UserInfo | null;
  setUserInfo: (userInfo: UserInfo) => void;
  post: Post | null;
  setPost: (post: Post) => void;
}

export const AnswerModalContext = React.createContext<AnswerModalContextProps>({
  isOpen: false,
  setOpen: (x: boolean) => {},
  userInfo: null,
  setUserInfo: (u: UserInfo) => {},
  post: null,
  setPost: (p: Post) => {},
});

export const AnswerModalProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [post, setPost] = useState<Post | null>(null);

  return (
    <AnswerModalContext.Provider
      value={{ isOpen, setOpen, userInfo, setUserInfo, post, setPost }}
    >
      {children}
    </AnswerModalContext.Provider>
  );
};

export const useAnswerModal = () => useContext(AnswerModalContext);
