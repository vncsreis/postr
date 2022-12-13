import { Box, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface SuggestionsProps extends PropsWithChildren {}

export default function Suggestions({ children }: SuggestionsProps) {
  return (
    <Box
      display="flex"
      flexDir="column"
      bgColor="white"
      p="6"
      borderBottomLeftRadius="10px"
      gap="6"
      shadow="md"
    >
      <Text fontWeight="bold">Who to Follow:</Text>
      {children}
    </Box>
  );
}
