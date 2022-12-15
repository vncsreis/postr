import { Box } from "@chakra-ui/react";
import {
  AnswerPostModal,
  InputPost,
  PostCard,
  SuggestionFollowCard,
} from "../components/content";
import { Sidebar, Suggestions } from "../components/layout";
import { useModal } from "../context";
import { post01 } from "../data/posts/examples";
import { user01 } from "../data/users/example";

export default function Home() {
  const { isOpen } = useModal();

  return (
    <Box
      display="flex"
      flexDir="row"
      backgroundColor="twitter.50"
      height="100%"
    >
      <AnswerPostModal isOpen={isOpen} />
      <Box h="100%" flex="1" pr="2">
        <Sidebar />
      </Box>

      <Box w="60%">
        <InputPost />

        <PostCard post={post01} userInfo={user01} />
      </Box>
      <Box flex="1" h="100%" pl="2">
        <Suggestions>
          <SuggestionFollowCard />
          <SuggestionFollowCard />
        </Suggestions>
      </Box>
    </Box>
  );
}
