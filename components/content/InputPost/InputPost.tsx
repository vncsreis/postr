import { Avatar, Box, Button, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function InputPost() {
  const [content, setContent] = useState("");

  function handlePost() {
    if (content !== "") {
      alert!(content);
    }

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
    <Box
      p="4"
      pt="6"
      display="flex"
      flexDir="column"
      shadow="md"
      backgroundColor="white"
      borderBottomRadius="10px"
      mb="6"
    >
      <Box display="flex" mb="4">
        <Avatar name="Bob Test" />
        <Textarea
          value={content}
          onChange={({ target: { value } }) => setContent(value)}
          size="m"
          resize="none"
          id="post"
          aria-label="write post"
          ml="4"
          placeholder="Post something..."
          border="none"
          borderRadius="10px"
          p="2"
        />
      </Box>
      <Button
        disabled={content === ""}
        alignSelf="flex-end"
        colorScheme="twitter"
        aria-label="post"
        onClick={handlePost}
      >
        Post
      </Button>
    </Box>
  );
}
