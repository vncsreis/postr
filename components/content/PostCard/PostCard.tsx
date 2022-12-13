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

const iconSize = 25;

export default function PostCard() {
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
          <Heading fontSize="md">Bob Test</Heading>
          <Text fontSize="md" color="gray.500">
            @testing
          </Text>
          <Text fontSize="md" color="gray.500">
            • 10m
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
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
