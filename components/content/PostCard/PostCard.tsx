import { Avatar, Box, Heading, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  AiFillStar,
  AiOutlineMessage,
  AiOutlineRetweet,
  AiOutlineShareAlt,
  AiOutlineStar,
} from "react-icons/ai";
import { IoEllipsisVertical } from "react-icons/io5";
import { useModal } from "../../../context";
import Post from "../../../models/post";
import { UserInfo } from "../../../models/user";
import getTimeElapsed from "./getTimeElaped";

const iconSize = 25;

interface PostCardProps {
  post: Post;
  userInfo: UserInfo;
}

export default function PostCard({ post, userInfo }: PostCardProps) {
  const [isFavourite, setIsFavourite] = useState(false);
  const { setOpen } = useModal();

  function handleSetFavourite() {
    setIsFavourite((old) => !old);
  }

  function handleAnswer() {
    setOpen(true);
  }

  return (
    <Box
      p="3"
      shadow="lg"
      backgroundColor="white"
      display="flex"
      borderRadius="10px"
    >
      <Avatar name="Bob Test" />
      <Box pl="4" display="flex" flexDir="column">
        <Box display="flex" flexDir="row" alignItems="center" gap="2">
          <Heading fontSize="md">{userInfo.name}</Heading>
          <Text fontSize="md" color="gray.500">
            @{userInfo.username}
          </Text>
          <Text fontSize="md" color="gray.500">
            • {getTimeElapsed(post.date, new Date())}
          </Text>

          <IconButton
            backgroundColor="#00000000"
            aria-label="Post options"
            ml="auto"
          >
            <IoEllipsisVertical size={20} />
          </IconButton>
        </Box>

        <Text mb="12" mt="4">
          {post.text}
        </Text>
        <Box
          w="85%"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <IconButton
            aria-label="Answer"
            backgroundColor="#00000000"
            onClick={handleAnswer}
          >
            <AiOutlineMessage size={iconSize} />
          </IconButton>
          <IconButton aria-label="Repost" backgroundColor="#00000000">
            <AiOutlineRetweet size={iconSize} />
          </IconButton>

          <IconButton
            backgroundColor="#00000000"
            aria-label="Favourite"
            onClick={handleSetFavourite}
          >
            {isFavourite ? (
              <AiFillStar size={iconSize} color="yellow" />
            ) : (
              <AiOutlineStar size={iconSize} />
            )}
          </IconButton>
          <IconButton aria-label="share" backgroundColor="#00000000">
            <AiOutlineShareAlt size={iconSize} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
