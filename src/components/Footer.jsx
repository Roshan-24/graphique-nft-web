import {
  VStack,
  HStack,
  Box,
  Text,
  Center,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
  useColorModeValue,
  useMediaQuery
} from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Footer = ({ setCurPage }) => {
  // Here's the signature
  const fontColor = useColorModeValue("black1", "white");
  const bgColor = useColorModeValue("white", "black2");
  const borderColor = useColorModeValue("grey1", "black1");
  const [isLargerThan1550] = useMediaQuery("(min-width: 1550px)");
  const [isLargerThan1300] = useMediaQuery("(min-width: 1300px)");
  const [isLargerThan650] = useMediaQuery("(min-width: 650px)");
  const navigate = useNavigate();
  return (
    <Box
      borderTopWidth={1}
      borderBottomWidth={1}
      borderTopColor={borderColor}
      borderBottomColor={borderColor}
    >
      <Center>
        {isLargerThan1300 ? (
          <HStack
            position="relative"
            left={"4%"}
            align={"start"}
            py={10}
            w="66.66%"
          >
            <VStack spacing={"7"} align={"left"} w="50%">
              <HStack spacing={5}>
                <VStack spacing={-1.5}>
                  <Text fontSize={18} fontWeight={"bold"} color={"primary"}>
                    G
                  </Text>
                  <Text fontSize={10} fontWeight={"bold"} color={"primary"}>
                    NFT
                  </Text>
                </VStack>
                <Text fontSize={16} fontWeight={"bold"} lineHeight={"18px"}>
                  Graphique NFT
                </Text>
              </HStack>
              <Text fontWeight={"bold"}>Get the latests Updates</Text>
              <InputGroup w={"75%"}>
                <Input
                  py={"10px"}
                  pl={"5"}
                  bgColor={bgColor}
                  _placeholder={{
                    color: fontColor,
                    fontSize: "13",
                    position: "relative"
                  }}
                  fontSize={"16"}
                  color={fontColor}
                  placeholder="Your email"
                />
                <Button
                  zIndex={10}
                  variant="primary"
                  position={"relative"}
                  left={"-18"}
                  minWidth={"max-content"}
                >
                  Email Me!
                </Button>
              </InputGroup>
            </VStack>
            <VStack spacing={"4"} align={"left"} w="25%">
              <Text pb={"10px"} fontSize={20} fontWeight={"bold"}>
                Graphique NFT
              </Text>
              <Text
                cursor={"pointer"}
                onClick={() => {
                  setCurPage(0);
                  navigate("");
                }}
                fontSize={16}
                color={fontColor}
              >
                Explore
              </Text>
              <Text
                cursor={"pointer"}
                onClick={() => {
                  setCurPage(1);
                  navigate("profile");
                }}
                fontSize={16}
                color={fontColor}
              >
                My Items
              </Text>
              <Text cursor={"pointer"} fontSize={16} color={fontColor}>
                Following
              </Text>
            </VStack>
            <VStack spacing={"4"} align={"left"} w="25%">
              <Text pb={"10px"} fontSize={20} fontWeight={"bold"}>
                Support
              </Text>
              <Text cursor={"pointer"} fontSize={16} color={fontColor}>
                Help centre
              </Text>
              <Text cursor={"pointer"} fontSize={16} color={fontColor}>
                Terms of service
              </Text>
              <Text cursor={"pointer"} fontSize={16} color={fontColor}>
                Legal
              </Text>
              <Text cursor={"pointer"} fontSize={16} color={fontColor}>
                Privacy policy
              </Text>
            </VStack>
          </HStack>
        ) : (
          <VStack spacing={10} py={10} w="100%">
            <VStack
              w={isLargerThan650 ? "70%" : "90%"}
              spacing={"6"}
              align={"left"}
            >
              <HStack spacing={5}>
                <VStack spacing={-1.5}>
                  <Text fontSize={18} fontWeight={"bold"} color={"primary"}>
                    G
                  </Text>
                  <Text fontSize={10} fontWeight={"bold"} color={"primary"}>
                    NFT
                  </Text>
                </VStack>
                <Text fontSize={16} fontWeight={"bold"} lineHeight={"18px"}>
                  Graphique NFT
                </Text>
              </HStack>
              <Text fontWeight={"bold"}>Get the latests Updates</Text>
              <InputGroup w={"100%"}>
                <Input
                  py={"10px"}
                  pl={"5"}
                  bgColor={bgColor}
                  _placeholder={{
                    color: fontColor,
                    fontSize: "13",
                    position: "relative"
                  }}
                  fontSize={"16"}
                  color={fontColor}
                  placeholder="Your email"
                />
                <Button
                  variant="primary"
                  position={"relative"}
                  left={"-18"}
                  minWidth={"max-content"}
                >
                  Email Me!
                </Button>
              </InputGroup>
            </VStack>
            <HStack
              position="relative"
              left={"7%"}
              align={"start"}
              w={isLargerThan650 ? "60%" : "80%"}
            >
              <VStack align={"start"} spacing={"4"} w="49%">
                <Text pb={"10px"} w={"75%"} fontSize={20} fontWeight={"bold"}>
                  Graphique NFT
                </Text>
                <Text
                  cursor={"pointer"}
                  onClick={() => {
                    setCurPage(0);
                    navigate("");
                  }}
                  fontSize={16}
                  color={fontColor}
                >
                  Explore
                </Text>
                <Text
                  cursor={"pointer"}
                  onClick={() => {
                    setCurPage(1);
                    navigate("profile");
                  }}
                  fontSize={16}
                  color={fontColor}
                >
                  My Items
                </Text>
                <Text cursor={"pointer"} fontSize={16} color={fontColor}>
                  Following
                </Text>
              </VStack>
              <VStack align={"start"} spacing={"4"} w="39%">
                <Text pb={"10px"} fontSize={20} fontWeight={"bold"}>
                  Support
                </Text>
                <Text cursor={"pointer"} fontSize={16} color={fontColor}>
                  Help centre
                </Text>
                <Text cursor={"pointer"} fontSize={16} color={fontColor}>
                  Terms of service
                </Text>
                <Text cursor={"pointer"} fontSize={16} color={fontColor}>
                  Legal
                </Text>
                <Text cursor={"pointer"} fontSize={16} color={fontColor}>
                  Privacy policy
                </Text>
              </VStack>
            </HStack>
          </VStack>
        )}
      </Center>
    </Box>
  );
};

export default Footer;
