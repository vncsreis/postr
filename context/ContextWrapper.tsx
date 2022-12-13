import { PropsWithChildren } from "react";
import { ModalProvider } from "./ui/ModalContext/ModalContext";

export default function ContexWrapper({ children }: PropsWithChildren) {
  return <ModalProvider>{children}</ModalProvider>;
}
