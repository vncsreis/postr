import {
  Avatar,
  Box,
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useModal } from "../../../context";
import AnsweredPostCard from "./AnsweredPostCard";

interface AnswerPostModalProps {
  isOpen: boolean;
}

export default function AnswerPostModal({ isOpen }: AnswerPostModalProps) {
  const [content, setContent] = useState("");
  const { setOpen } = useModal();

  function handlePost() {
    if (content !== "") {
      alert!(content);
      setContent("");
      setOpen(false);
    }
  }

  function handleClose() {
    setOpen(false);
    setContent("");
  }

  useEffect(() => {
    function listener(e: KeyboardEvent) {
      if (e.ctrlKey && e.key === "Enter") {
        handlePost();
      }
    }

    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {}}
      size="4xl"
      onEsc={handleClose}
      onOverlayClick={handleClose}
    >
      <ModalOverlay />
      <ModalContent borderRadius="10px" px="6" width="70%" role="group">
        <ModalHeader display="flex">
          <IconButton
            _groupHover={{ opacity: "1" }}
            opacity="0"
            ml="auto"
            aria-label="Close answer"
            bgColor="#00000000"
            onClick={handleClose}
          >
            <AiOutlineClose size={25} />
          </IconButton>
        </ModalHeader>
        <ModalBody>
          <AnsweredPostCard />
          <Box display="flex">
            <Avatar name="Bob Test" />
            <Textarea
              value={content}
              onChange={({ target: { value } }) => setContent(value)}
              size="m"
              resize="none"
              id="post"
              aria-label="write post"
              ml="4"
              placeholder="Answer..."
              border="none"
              borderRadius="10px"
              p="2"
            />
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button
            disabled={content === ""}
            alignSelf="flex-end"
            colorScheme="twitter"
            aria-label="post"
            onClick={handlePost}
          >
            Post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
