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
import { useNavigate } from "react-router-dom";

const SellerCard = ({ no, name, rate, src }) => {
  const navigate = useNavigate();

  return (
    <VStack
      fontSize={"16px"}
      px={10}
      py={6}
      borderRadius={"20px"}
      pos={"relative"}
      bg={useColorModeValue("white", "#2A2D3A")}
      shadow={"md"}
      transition={"all 0.2s ease"}
      onClick={() => navigate("/profile")}
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
        <Text fontWeight={"semibold"}>{no}</Text>
      </Center>
      <Avatar boxSize={"88px"} src={src}>
        <AvatarBadge bg={"green.500"}>
          <MdDone color={"white"} />
        </AvatarBadge>
      </Avatar>
      <Text fontWeight={"semibold"}>{name}</Text>
      <HStack spacing={1}>
        <Text fontWeight={"semibold"}>{rate}</Text>
        <Text>ETH</Text>
      </HStack>
    </VStack>
  );
};

export default SellerCard;
