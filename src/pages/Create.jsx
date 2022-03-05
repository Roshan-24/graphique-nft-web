import {
  Container,
  HStack,
  Stack,
  VStack,
  Text,
  Input,
  Box,
  Center,
  Spacer,
  Textarea,
  Select,
  Button,
  InputRightElement,
  InputGroup
} from "@chakra-ui/react";
import { BsFillImageFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
const Create = () => (
  <Container>
    <VStack align="left">
      <Text
        fontSize="xl"
        marginBottom="15px"
        marginTop="20px"
        textAlign="left"
        fontWeight="600"
      >
        Create new Item
      </Text>
      <Text
        fontSize="lg"
        marginBottom="15px"
        paddingBottom="10px"
        fontWeight="600"
      >
        Upload File
      </Text>
    </VStack>
    <VStack>
      <Box w="full" h="300px" border="1px dashed" borderRadius="15px">
        <Center>
          <Text paddingTop="45px" paddingBottom="10px">
            JPG, PNG, GIF, SVG, WEBM, MP3, MP4, Max 100mb
          </Text>
        </Center>

        <Center>
          <BsFillImageFill fontSize="114.17px" />
        </Center>
        <Center>
          <Text paddingTop="10px" paddingBottom="10px">
            Drag and Drop File
          </Text>
        </Center>
        <Center>
          <Text paddingBottom="10px">or browse media on your device</Text>
        </Center>
      </Box>
    </VStack>
    <VStack align="left">
      <Text
        fontSize="lg"
        fontWeight="600"
        paddingBottom="2px"
        paddingTop="25px"
      >
        Name
      </Text>
      <Input colorScheme="green.500" placeholder="Item Name" />
      <Text
        fontSize="lg"
        fontWeight="600"
        paddingBottom="2px"
        paddingTop="25px"
      >
        Description
      </Text>
      <Textarea h="150px" placeholder="Description of your item" />

      <Text
        fontSize="lg"
        fontWeight="600"
        paddingBottom="2px"
        paddingTop="25px"
      >
        Price
      </Text>

      {/* <Select
        iconSize="300px"
        color='gray.400'
        icon={<RiArrowDropDownLine />}
        placeholder="Enter Price"
      /> */}

      <InputGroup size="md">
        <Input pr="4.5rem" placeholder="Enter Price" />
        <InputRightElement width="4.5rem">
          <Text color="gray.600">ETH</Text>
          <RiArrowDropDownLine fontSize="40px" color="gray.600" />
        </InputRightElement>
      </InputGroup>
    </VStack>

    <VStack align="end" paddingTop="40px">
      <Button alignContent="right" w="140px" variant="primary">
        Create Item
      </Button>
    </VStack>
  </Container>
);

export default Create;
