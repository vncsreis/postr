import { Avatar, Box, Heading, Text } from "@chakra-ui/react";

export default function AnsweredPostCard() {
  return (
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
          <Heading fontSize="md">Bob Test</Heading>
          <Text fontSize="md" color="gray.500">
            @testing
          </Text>
          <Text fontSize="md" color="gray.500">
            • 10m
          </Text>
        </Box>

        <Text mb="4" mt="4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
      </Box>
    </Box>
  );
}
