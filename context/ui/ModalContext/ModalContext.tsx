import React, { PropsWithChildren, useContext, useState } from "react";

export const ModalContext = React.createContext({
  isOpen: false,
  setOpen: (x: boolean) => {},
});

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
