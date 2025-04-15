import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { useColorMode } from "./ui/color-mode";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text fontSize={22} fontWeight={"bold"}>
          <Link to={"/"}>PRODUCT STORE 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus fontSize={20}></CiSquarePlus>
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <FaMoon></FaMoon>
            ) : (
              <FaSun size="20"></FaSun>
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
