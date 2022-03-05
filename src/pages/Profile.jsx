import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
  VStack
} from "@chakra-ui/react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import NftCard from "../components/NftCard";

const Profile = () => {
  const [isBig] = useMediaQuery("(min-width: 812px)");
  const { colorMode } = useColorMode();

  return (
    <Container maxW={"full"} px={0} pos={"relative"}>
      <Image
        w={"full"}
        h={"308px"}
        objectFit={"cover"}
        objectPosition={"35% 35%"}
        src={
          "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80"
        }
      />
      <VStack
        pos={"absolute"}
        left={"50%"}
        w={"208px"}
        transform={"translateX(-50%)"}
        top={"205px"}
      >
        <Avatar
          src={
            "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          }
          w={"208px"}
          h={"208px"}
          p={2}
          bg={useColorModeValue("white", "dark")}
        />
        <Heading fontSize={"28px"} fontWeight={"semibold"}>
          Mia Ayana
        </Heading>
      </VStack>
      <Container maxW={"1024px"} px={"24px"} mt={"170px"}>
        <VStack spacing={8} py={12}>
          {isBig && (
            <HStack w={"full"} spacing={4}>
              <InputGroup
                flex={3.7}
                borderRadius={"lg"}
                borderWidth={colorMode === "dark" ? 0 : "2px"}
                borderColor={"grey1"}
              >
                <InputLeftElement
                  pointerEvents={"none"}
                  children={<FiSearch />}
                />
                <Input
                  variant={"filled"}
                  bg={useColorModeValue("white", "black2")}
                  placeholder="Search"
                  _hover={{ bg: useColorModeValue("white", "black2") }}
                />
              </InputGroup>
              <Menu>
                <MenuButton
                  flex={1}
                  bg={useColorModeValue("white", "black2")}
                  _hover={{ bg: useColorModeValue("white", "black2") }}
                  _active={{ bg: useColorModeValue("white", "black2") }}
                  as={Button}
                  borderRadius={"lg"}
                  borderWidth={colorMode === "dark" ? 0 : "2px"}
                  borderColor={"grey1"}
                >
                  <HStack>
                    <Text fontWeight={"normal"}>Recently Listed</Text>
                    <Spacer />
                    <FiChevronDown />
                  </HStack>
                </MenuButton>
                <MenuList bg={useColorModeValue("white", "black2")}>
                  <MenuItem>Most Liked</MenuItem>
                  <MenuItem>Most Views</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          )}
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={"20px"}>
            <NftCard />
            <NftCard />
            <NftCard />
            <NftCard />
            <NftCard />
            <NftCard />
            <NftCard />
            <NftCard />
          </SimpleGrid>
          <Button variant={"secondary"} px={"24"} rounded={"xl"}>
            Load More
          </Button>
        </VStack>
      </Container>
    </Container>
  );
};

export default Profile;
