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

const TextItem = (itemContent, itemSize = 16) => {
  return (
    <Text fontSize={itemSize + "px"} fontWeight={"600"}>
      {itemContent}
    </Text>
  );
};

function CheckoutModal() {
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalBg = useColorModeValue("white", "dark");
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Button size="sm" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
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
              Check Out
            </Text>
            <Divider fontSize={"2px"} />
            <HStack pt={"20px"}>
              {TextItem("Item")}
              <Spacer />
              {TextItem("Subtotal")}
            </HStack>
            <HStack pt={"29px"} align={"start"}>
              <Image
                src={
                  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
                width={"107px"}
                height={"104px"}
              />
              <VStack alignItems={"left"} pl={"10px"} alignSelf={"center"}>
                {TextItem("Mia Ayana")}
                <Text fontSize={"14px"}>Abstact Smoke Red Blue</Text>
              </VStack>
              <Spacer />
              <HStack>
                <Text fontSize={"16px"}>4.5</Text>
                <Text fontSize={"16px"} fontWeight={"600"}>
                  ETH
                </Text>
              </HStack>
            </HStack>
            <HStack pt={"29px"} pb={"20px"}>
              {TextItem("Total")}
              <Spacer />
              <HStack>
                <Text fontSize={"16px"}>4.5</Text>
                <Text fontSize={"16px"} fontWeight={"600"}>
                  ETH
                </Text>
              </HStack>
            </HStack>
            <Divider />
            <HStack justifyContent={"center"} pb={"29px"} pt={"20px"}>
              <Button variant={"primary"}>Checkout</Button>
              <Button variant={"secondary"}>Cancel</Button>
            </HStack>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CheckoutModal;
