import {
  Button,
  Stack,
  HStack,
  VStack,
  Box,
  Image,
  Text,
  Container,
  useColorModeValue
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Item = () => {
  return (
    <Container maxW={"container.xl"} display={"flex"}>
      <Stack
        direction={["column", "column", "row"]}
        mx={"auto"}
        spacing={[4, 4, 12]}
      >
        <Image
          my={[12, 12, "auto"]}
          w={["full", "full", "542px"]}
          h={["auto", "auto", "auto", "542px"]}
          borderRadius={"20px"}
          overflow={"hidden"}
          src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />

        <Box
          display={"flex"}
          flexDir={"column"}
          borderLeftWidth={[0, 0, "1px"]}
          borderTopWidth={["1px", "1px", 0]}
          borderColor={useColorModeValue("gray1", "#2D2E36")}
          pl={8}
          py={[4, 4, 12]}
        >
          <VStack
            align={["stretch", "stretch", "left"]}
            ml={[0, 0, "43px"]}
            py={[4, 8, 0]}
            my={"auto"}
          >
            <HStack alignSelf={"center"} align={"center"} w={"full"}>
              <Text fontSize={"28px"} fontWeight={"600"} lineHeight={"42px"}>
                Abstract Smoke Red Blue
              </Text>

              <HStack
                w="full "
                px={"2"}
                h="33px"
                border={"1px"}
                borderRadius={"22px"}
                borderColor={"black1"}
                ml={"14px"}
              >
                <AiFillHeart />
                <Text fontSize={"14px"} fontWeight={"400"}>
                  92
                </Text>
              </HStack>
            </HStack>

            <HStack pb={"30px"}>
              <Text fontWeight={"400"} fontSize={"14px"} lineHeight={"21px"}>
                From
              </Text>
              <Text fontWeight={"600"} fontSize={"14px"} lineHeight={"21px"}>
                4.5 ETH &bull;
              </Text>
              <Text fontWeight={"400"} fontSize={"14px"} lineHeight={"21px"}>
                {" "}
                20 of 25 available
              </Text>
            </HStack>

            <Text
              pb={"10px"}
              fontWeight={"400"}
              fontSize={"12px"}
              lineHeight={"18px"}
            >
              Creator
            </Text>

            <HStack pb={"26px"}>
              <Image
                width={"54px"}
                height={"54px"}
                borderRadius={"50%"}
                src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              ></Image>
              <Text fontWeight={"600"} fontSize={"14px"} lineHeight={"21px"}>
                Mia Ayana
              </Text>
            </HStack>

            <Tabs>
              <TabList borderBottomWidth={"1px"} borderColor={"black1"}>
                <Tab
                  textAlign={"left"}
                  _focus={{ boxShadow: "none" }}
                  _selected={{ fontWeight: "600", borderBottom: "1px" }}
                  fontWeight={"400"}
                  fontSize={"16px"}
                  lineHeight={"24px"}
                >
                  Details
                </Tab>
                <Tab
                  textAlign={"left"}
                  _focus={{ boxShadow: "none" }}
                  _selected={{ fontWeight: "600", borderBottom: "1px" }}
                  fontWeight={"400"}
                  fontSize={"16px"}
                  lineHeight={"24px"}
                >
                  Offer
                </Tab>
                <Tab
                  textAlign={"left"}
                  _focus={{ boxShadow: "none" }}
                  _selected={{ fontWeight: "600", borderBottom: "1px" }}
                  fontWeight={"400"}
                  fontSize={"16px"}
                  lineHeight={"24px"}
                >
                  History
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel
                  pt={"30px"}
                  px={"0"}
                  maxW={["full", "full", "420px"]}
                  fontWeight={"400"}
                  fontSize={"16px"}
                  lineHeight={"26px"}
                >
                  Details. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </TabPanel>
                <TabPanel
                  pt={"30px"}
                  px={"0"}
                  maxW={["full", "full", "420px"]}
                  fontWeight={"400"}
                  fontSize={"16px"}
                  lineHeight={"26px"}
                >
                  Offer. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </TabPanel>
                <TabPanel
                  pt={"30px"}
                  px={"0"}
                  maxW={["full", "full", "420px"]}
                  fontWeight={"400"}
                  fontSize={"16px"}
                  lineHeight={"26px"}
                >
                  History. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </TabPanel>
              </TabPanels>
            </Tabs>

            <HStack></HStack>
            <HStack mt={"30px"} spacing={"30px"}>
              <Button variant={"primary"}>Buy for 4.5 ETH</Button>
              <Button variant={"secondary"}>Make Offer</Button>
            </HStack>
          </VStack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Item;
