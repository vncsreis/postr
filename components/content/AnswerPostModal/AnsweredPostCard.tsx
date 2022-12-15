import { Avatar, Box, Heading, Text } from "@chakra-ui/react";
import { useModal } from "../../../context";
import Post from "../../../models/post";
import { UserInfo } from "../../../models/user";
import getTimeElapsed from "../PostCard/getTimeElapsed";

export default function AnsweredPostCard() {
  const now = new Date();

  const { setOpen, post, userInfo } = useModal();

  if (!userInfo || !post) {
    return setOpen(false);
  }

  return (
    userInfo &&
    post && (
      <Box backgroundColor="white" display="flex">
        <Box display="flex" flexDir="column" alignItems="center">
          <Avatar name="Bob Test" />
          <Box
            style={{
              content: "",
              width: "0px",
              flex: 1,
              margin: "30%",
            }}
            borderColor="twitter.300"
            borderWidth="2px"
            borderStyle="solid"
          />
        </Box>
        <Box pl="4" display="flex" flexDir="column" mb="6">
          <Box display="flex" flexDir="row" alignItems="center" gap="2">
            <Heading fontSize="md">{userInfo.name}</Heading>
            <Text fontSize="md" color="gray.500">
              @{userInfo.username}
            </Text>
            <Text fontSize="md" color="gray.500">
              • {getTimeElapsed(post.date, now)}
            </Text>
          </Box>

          <Text mb="4" mt="4">
            {post.text}
          </Text>
        </Box>
      </Box>
    )
  );
}
