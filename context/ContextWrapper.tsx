import { PropsWithChildren } from "react";
import { AnswerModalProvider } from "./ui/AnswerModalContext/AnswerModalContext";
import { RepostModalProvider } from "./ui/RepostModalContext/RepostModalContext";

export default function ContexWrapper({ children }: PropsWithChildren) {
  return (
    <AnswerModalProvider>
      <RepostModalProvider>{children}</RepostModalProvider>
    </AnswerModalProvider>
  );
}
