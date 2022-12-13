import { Box, Divider, Heading, List, ListItem, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Sidebar() {
  return (
    <Box
      display="flex"
      flexDir="column"
      backgroundColor="white"
      as="header"
      shadow="md"
      alignItems="flex-start"
      height="100%"
    >
      <Box display="flex" alignItems="center" p="6">
        <Image src="/notepad.svg" alt="Postr logo" width={75} height={75} />
        <Heading fontFamily="'Pacifico', cursive">Postr</Heading>
      </Box>
      <List w="100%" alignItems="center">
        <Divider orientation="horizontal" />
        <ListItem p="2">
          <Text
            textAlign="center"
            color="twitter.500"
            fontSize="lg"
            fontWeight="semibold"
          >
            Home
          </Text>
        </ListItem>
        <Divider orientation="horizontal" />
        <ListItem p="2">
          <Text
            textAlign="center"
            color="twitter.500"
            fontSize="lg"
            fontWeight="semibold"
          >
            Profile
          </Text>
        </ListItem>
      </List>
    </Box>
  );
}
