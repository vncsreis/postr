import { Box } from "@chakra-ui/react";
import {
  AnswerPostModal,
  InputPost,
  PostCard,
  SuggestionFollowCard,
} from "../components/content";
import RepostModal from "../components/content/RepostModal/RepostModal";
import { Sidebar, Suggestions } from "../components/layout";
import { useAnswerModal, useRepostModal } from "../context";
import { posts } from "../data/posts/examples";
import { users } from "../data/users/example";
import { UserInfo } from "../models/user";

export default function Home() {
  const { isOpen: isAnswerModalOpen } = useAnswerModal();
  const { isOpen: isRepostModalOpen } = useRepostModal();

  return (
    <Box
      display="flex"
      flexDir="row"
      backgroundColor="twitter.50"
      height="100%"
    >
      <AnswerPostModal isOpen={isAnswerModalOpen} />
      <RepostModal isOpen={isRepostModalOpen} />

      <Box h="100%" flex="1" pr="2">
        <Sidebar />
      </Box>

      <Box w="60%">
        <InputPost />

        {posts.map((post) => {
          const user = users.find(
            (info) => info.id === post.userId
          ) as UserInfo;

          return <PostCard key={post.id} post={post} userInfo={user} />;
        })}
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
