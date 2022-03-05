import {
  Avatar,
  AvatarBadge,
  Box,
  Center,
  HStack,
  Text,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import { MdDone } from "react-icons/md";

const SellerCard = () => (
  <VStack
    fontSize={"16px"}
    px={10}
    py={6}
    borderRadius={"20px"}
    pos={"relative"}
    bg={useColorModeValue("white", "#2A2D3A")}
    shadow={"md"}
    transition={"all 0.2s ease"}
    _hover={{ shadow: "xl", cursor: "pointer" }}
  >
    <Center
      boxSize={"33px"}
      borderRadius={"50%"}
      bg={"primary"}
      color={"white"}
      pos={"absolute"}
      top={3}
      left={3}
    >
      <Text fontWeight={"semibold"}>1</Text>
    </Center>
    <Avatar
      boxSize={"88px"}
      src={
        "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
      }
    >
      <AvatarBadge bg={"green.500"}>
        <MdDone color={"white"} />
      </AvatarBadge>
    </Avatar>
    <Text fontWeight={"semibold"}>Mia Ayana</Text>
    <HStack spacing={1}>
      <Text fontWeight={"semibold"}>5.250</Text>
      <Text>ETH</Text>
    </HStack>
  </VStack>
);

export default SellerCard;
