import {
  Box,
  HStack,
  Image,
  Spacer,
  Text,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";

const NftCard = () => (
  <VStack
    h={"319px"}
    w={"233px"}
    borderRadius={"20px"}
    p={"12px"}
    align={"stretch"}
    bg={useColorModeValue("white", "#2A2D3A")}
    shadow={"md"}
    transition={"all 0.2s ease"}
    _hover={{ shadow: "2xl", cursor: "pointer" }}
  >
    <Box h={"230px"} borderRadius={"15px"} overflow={"hidden"}>
      <Image
        boxSize={"full"}
        src={
          "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
      />
    </Box>
    <Text fontSize={"14px"} fontWeight={"semibold"}>
      Abstract Smoke Red Blue
    </Text>
    <HStack fontSize={"12px"} lineHeight={"18px"} spacing={1.5}>
      <Text fontWeight={"semibold"}>1.25</Text>
      <Text>ETH</Text>
      <Spacer />
      <AiFillHeart />
      <Text>92</Text>
    </HStack>
  </VStack>
);

export default NftCard;
