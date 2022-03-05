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
    <Container maxW={"992px"}>
      <VStack align={"center"} spacing={8} py={12}>
        <Center
          w={"full"}
          h={"300px"}
          px={"64px"}
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
            onClick={() => scroll(-40)}
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
              <SellerCard />
              <SellerCard />
              <SellerCard />
              <SellerCard />
              <SellerCard />
              <SellerCard />
              <SellerCard />
            </HStack>
          </Box>
          <CgChevronRightO
            onClick={() => scroll(40)}
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
  );
};

export default Home;
