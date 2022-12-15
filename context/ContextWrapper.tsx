import { PropsWithChildren } from "react";
import { ModalProvider } from "./ui/AnswerModalContext/AnswerModalContext";

export default function ContexWrapper({ children }: PropsWithChildren) {
  return <ModalProvider>{children}</ModalProvider>;
}
