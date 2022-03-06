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
            <NftCard
              name="Abstact Smoke Red Blue"
              like="92"
              rate="1.25"
              src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
            <NftCard
              name="Mountain Landscape"
              like="25"
              rate="0.20"
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
            <NftCard
              name="Paint Color on Wall"
              like="55"
              rate="0.55"
              src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80"
            />
            <NftCard
              name="Abstract Patern"
              like="82"
              rate="0.87"
              src="https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
            <NftCard
              name="White Line Grafiti"
              like="22"
              rate="0.09"
              src="https://i0.wp.com/www.concrete-online.co.uk/wp-content/uploads/2020/11/content-pixie-woMD-vhzOHI-unsplash-scaled.jpg?ssl=1"
            />
            <NftCard
              name="Abstract Triangle"
              like="71"
              rate="0.90"
              src="https://images.unsplash.com/photo-1524169358666-79f22534bc6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
            <NftCard
              name="Lake Landscape"
              like="63"
              rate="0.52"
              src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
            />
            <NftCard
              name="Blue Red Art"
              like="66"
              rate="0.85"
              src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
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
