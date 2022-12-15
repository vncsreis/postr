import React, { PropsWithChildren, useContext, useState } from "react";

interface RepostModalContextProps {
  isOpen: boolean;
  setOpen: (x: boolean) => void;
}

export const RepostModalContext = React.createContext<RepostModalContextProps>({
  isOpen: false,
  setOpen: (x: boolean) => {},
});

export const RepostModalProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <RepostModalContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </RepostModalContext.Provider>
  );
};

export const useRepostModal = () => useContext(RepostModalContext);
