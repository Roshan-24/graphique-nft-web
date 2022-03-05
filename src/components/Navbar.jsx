import React from "react";
import {
  VStack,
  HStack,
  Box,
  Text,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
  IconButton,
  useColorModeValue,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter
} from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";
import { FiSun, FiMoon } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "black2");
  const fontColor = useColorModeValue("black1", "white");
  const borderColor = useColorModeValue("grey1", "black1");
  const [isLargerThan1550] = useMediaQuery("(min-width: 1550px)");
  const [isLargerThan1300] = useMediaQuery("(min-width: 1300px)");
  const [isLargerThan896] = useMediaQuery("(min-width: 896px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <HStack
      justifyContent={"space-between"}
      spacing={"5"}
      borderBottom={"1px"}
      borderBottomColor={borderColor}
      px={"5%"}
      py={"30"}
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
        <Text
          fontSize={16}
          color={fontColor}
          fontWeight={"bold"}
          lineHeight={"18px"}
        >
          Graphique NFT
        </Text>
      </HStack>
      {isLargerThan896 ? (
        <>
          {isLargerThan1300 ? (
            <InputGroup
              flexGrow={3}
              borderColor={borderColor}
              w={isLargerThan1550 ? "40%" : "25%"}
            >
              <InputLeftElement
                pointerEvents="none"
                fontSize="1.2em"
                children={
                  <Box>
                    <RiSearch2Line size={25} />
                  </Box>
                }
              />
              <Input
                py={"20px"}
                pl={10}
                bgColor={bgColor}
                _placeholder={{
                  color: fontColor,
                  fontSize: "13",
                  position: "relative"
                }}
                fontSize={"16"}
                color={fontColor}
                placeholder="Search item here"
              />
            </InputGroup>
          ) : null}
          <Text cursor={"pointer"} fontWeight={"bold"}>
            Explore
          </Text>
          <Text cursor={"pointer"}>My Items</Text>
          <Text cursor={"pointer"}>Following</Text>
          <Button variant={"primary"}>Create</Button>
          <Button px={"10"} variant={"secondary"}>
            Connect
          </Button>
          <IconButton
            variant={"secondary"}
            onClick={toggleColorMode}
            icon={colorMode === "dark" ? <FiSun /> : <FiMoon />}
          />
        </>
      ) : (
        <>
          <HStack spacing={5}>
            <IconButton
              variant={"secondary"}
              onClick={toggleColorMode}
              icon={colorMode === "dark" ? <FiSun /> : <FiMoon />}
            />
            <Button ref={btnRef} variant={"primary"} px={0} onClick={onOpen}>
              <AiOutlineMenu></AiOutlineMenu>
            </Button>
          </HStack>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            bgColor={bgColor}
          >
            <DrawerOverlay />
            <DrawerContent bgColor={bgColor}>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>

              <DrawerBody>
                <VStack spacing={5}>
                  <Text align={"left"} w="100%" cursor={"pointer"}>
                    Explore
                  </Text>
                  <Text align={"left"} w="100%" cursor={"pointer"}>
                    My Items
                  </Text>
                  <Text align={"left"} w="100%" cursor={"pointer"}>
                    Following
                  </Text>
                </VStack>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="primary" mr={3} onClick={onClose}>
                  Create
                </Button>
                <Button variant="secondary">Connect</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </HStack>
  );
};

export default Navbar;
