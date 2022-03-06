import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  SimpleGrid,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react";
import { CgChevronRightO, CgChevronLeftO } from "react-icons/cg";
import { useRef } from "react";
import NftCard from "../components/NftCard";
import SellerCard from "../components/SellerCard";

const Home = () => {
  const ref = useRef();

  const scroll = scrollOffset => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <Container maxW={"1200px"} px={[2, 4, 12]}>
      <VStack align={"center"} spacing={8} py={12}>
        <Center
          w={"full"}
          h={"300px"}
          px={["40px", "48px", "64px", "88"]}
          bgGradient={"linear(to-r, gradient-left, gradient-right)"}
          color={"white"}
          borderRadius={"25px"}
          overflow={"hidden"}
          pos={"relative"}
        >
          <Box
            boxSize={"338px"}
            borderRadius={"50%"}
            bg={"whiteAlpha.400"}
            pos={"absolute"}
            top={"-169px"}
            left={"-169px"}
          />
          <Text fontSize={["32px", "40px", "48px"]} fontWeight={"bold"}>
            Discover, collect, and sell extraordinary NFTs
          </Text>
          <Box
            boxSize={"338px"}
            borderRadius={"50%"}
            bg={"whiteAlpha.400"}
            pos={"absolute"}
            top={"150px"}
            left={"650px"}
          />
        </Center>
        <Spacer />
        <Text w={"full"} fontSize={"28px"} fontWeight={"semibold"}>
          Top Sellers
        </Text>
        <Box w={"full"} pos={"relative"}>
          <CgChevronLeftO
            onClick={() => scroll(-200)}
            fontSize={"32px"}
            style={{
              position: "absolute",
              zIndex: 1,
              top: "80px",
              cursor: "pointer"
            }}
          />
          <Box w={"full"} display={"flex"} px={3}>
            <HStack
              ref={ref}
              spacing={5}
              mx={"auto"}
              overflow={"auto"}
              py={4}
              my={-4}
              scrollBehavior={"smooth"}
              sx={{ "&::-webkit-scrollbar": { display: "none" } }}
            >
              <SellerCard
                no="1"
                name="Mia Ayana"
                rate="5.250"
                src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              />
              <SellerCard
                no="2"
                name="Rian Leon"
                rate="4.932"
                src="https://images.unsplash.com/profile-1480232252215-890ae682026f?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
              />
              <SellerCard
                no="3"
                name="LadyYoung"
                rate="4.620"
                src="https://images.unsplash.com/photo-1617720938355-197f10fed732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              />
              <SellerCard
                no="4"
                name="BlackGlass"
                rate="4.125"
                src="https://images.unsplash.com/photo-1600364769238-1e76e9ff91cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"
              />
              <SellerCard
                no="5"
                name="Budhiman"
                rate="3.921"
                src="https://images.unsplash.com/photo-1546567850-8a49d669d37a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
              />
              <SellerCard
                no="6"
                name="LadyYoung"
                rate="4.620"
                src="https://images.unsplash.com/photo-1617720938355-197f10fed732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              />
              <SellerCard
                no="7"
                name="BlackGlass"
                rate="4.125"
                src="https://images.unsplash.com/photo-1600364769238-1e76e9ff91cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"
              />
              <SellerCard
                no="8"
                name="Budhiman"
                rate="3.921"
                src="https://images.unsplash.com/photo-1546567850-8a49d669d37a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
              />
            </HStack>
          </Box>
          <CgChevronRightO
            onClick={() => scroll(200)}
            fontSize={"32px"}
            style={{
              position: "absolute",
              zIndex: 1,
              top: "80px",
              right: "0",
              cursor: "pointer"
            }}
          />
        </Box>
        <Spacer />
        <Text w={"full"} fontSize={"28px"} fontWeight={"semibold"}>
          Hot Bids
        </Text>
        <SimpleGrid
          minChildWidth={"233px"}
          spacing={"30px"}
          w={"full"}
          justifyItems={"center"}
        >
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
  );
};

export default Home;
