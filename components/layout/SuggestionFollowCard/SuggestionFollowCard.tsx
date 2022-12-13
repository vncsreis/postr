import { Avatar, Box, Divider, Text } from "@chakra-ui/react";

export default function SuggestionFollowCard() {
  return (
    <Box
      borderRadius="10px"
      border="solid 1px"
      borderColor="twitter.300"
      p="4"
      display="flex"
      alignItems="center"
    >
      <Avatar name="Susan Terrence" />
      <Box ml="2">
        <Text fontWeight="bold">Susan Terrence</Text>
        <Divider orientation="horizontal" />
        <Text fontStyle="italic">@susanterr</Text>
      </Box>
    </Box>
  );
}
