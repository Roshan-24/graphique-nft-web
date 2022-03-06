import {
  Modal,
  ModalOverlay,
  ModalContent,
  useColorModeValue,
  VStack,
  HStack,
  Text,
  Divider,
  Image
} from "@chakra-ui/react";
import { transparentize } from "@chakra-ui/theme-tools";
import { FaTelegramPlane, FaInstagram, FaTwitter } from "react-icons/fa";

const PaymentModal = ({ isOpen, onClose }) => {
  const modalBg = useColorModeValue("white", "dark");
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay bg={transparentize("black2", 0.9)} />
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
            <Divider />
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
};

export default PaymentModal;
