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
import { useNavigate } from "react-router-dom";

const NftCard = ({ name, like, rate, src }) => {
  const navigate = useNavigate();

  return (
    <VStack
      h={"319px"}
      w={"233px"}
      borderRadius={"20px"}
      p={"12px"}
      align={"stretch"}
      bg={useColorModeValue("white", "#2A2D3A")}
      shadow={"md"}
      transition={"all 0.2s ease"}
      onClick={() => navigate("/item")}
      _hover={{ shadow: "2xl", cursor: "pointer" }}
    >
      <Box h={"230px"} borderRadius={"15px"} overflow={"hidden"}>
        <Image boxSize={"full"} src={src} />
      </Box>
      <Text fontSize={"14px"} fontWeight={"semibold"}>
        {name}
      </Text>
      <HStack fontSize={"12px"} lineHeight={"18px"} spacing={1.5}>
        <Text fontWeight={"semibold"}>{rate}</Text>
        <Text>ETH</Text>
        <Spacer />
        <AiFillHeart />
        <Text>{like}</Text>
      </HStack>
    </VStack>
  );
};

export default NftCard;
