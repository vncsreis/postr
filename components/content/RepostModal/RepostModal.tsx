import {
  Box,
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useRepostModal } from "../../../context";

interface RepostModalProps {
  isOpen: boolean;
}

export default function RepostModal({ isOpen }: RepostModalProps) {
  const { setOpen } = useRepostModal();

  function handleClose() {
    setOpen(false);
  }

  function handleNo() {
    setOpen(false);
  }

  function handleYes() {
    //TODO: add function
    alert("Reposted!");
    setOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {}}
      size="sm"
      onEsc={handleClose}
      onOverlayClick={handleClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent borderRadius="10px" px="6" width="70%" role="group">
        <ModalHeader display="flex">
          <Text>Repost Post?</Text>
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
        <ModalFooter display="flex" justifyContent="space-around">
          <Button colorScheme="gray" aria-label="No" onClick={() => handleNo()}>
            No
          </Button>
          <Button
            colorScheme="twitter"
            aria-label="Yes"
            onClick={() => handleYes()}
          >
            Repost
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
