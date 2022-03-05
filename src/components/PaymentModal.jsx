import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useColorModeValue,
  useDisclosure,
  Button,
  useColorMode,
  VStack,
  HStack,
  Text,
  Divider,
  Spacer,
  Box,
  Image
} from "@chakra-ui/react";
import { FaTelegramPlane, FaInstagram, FaTwitter } from "react-icons/fa";

const TextItem = (itemContent, itemSize = 16) => {
  return (
    <Text fontSize={itemSize + "px"} fontWeight={"600"}>
      {itemContent}
    </Text>
  );
};

function CheckoutModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalBg = useColorModeValue("white", "dark");
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay bg="black2" />
        <ModalContent
          bg={modalBg}
          width={"585px"}
          borderWidth={"1px"}
          borderColor={"black1"}
          borderRadius={"20px"}
          maxW={"none"}
        >
          <VStack align={"stretch"} px={"39px"}>
            <Text
              fontSize="24px"
              mt="29px"
              mb={"20px"}
              fontWeight={"600"}
              textAlign={"center"}
            >
              Payment Successful
            </Text>
            <Divider fontSize={"2px"} />
            <VStack pt={"20px"}>
              <Image
                width={"211px"}
                height={"206px"}
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <VStack pt={"29px"} pb={"20px"}>
                <HStack>
                  <Text fontSize={"16px"}>You successfully purchased</Text>
                  <Text fontSize={"16px"} fontWeight={"600"}>
                    Abstact Smoke
                  </Text>
                </HStack>
                <HStack>
                  <Text fontSize={"16px"} fontWeight={"600"}>
                    Red Blue
                  </Text>
                  <Text fontSize={"16px"}>from</Text>
                  <Text fontSize={"16px"} fontWeight={"600"}>
                    Mia Ayana
                  </Text>
                </HStack>
              </VStack>
              <Divider />
              <Text
                pt={"20px"}
                fontSize="24px"
                fontWeight={"600"}
                textAlign={"center"}
              >
                Share
              </Text>
              <HStack pb={"35px"} pt={"15px"} spacing={12}>
                <FaInstagram fontSize={"40px"} />
                <FaTwitter fontSize={"40px"} />
                <FaTelegramPlane fontSize={"40px"} />
              </HStack>
            </VStack>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CheckoutModal;
