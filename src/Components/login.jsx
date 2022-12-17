import {
  Input,
  Box,
  Button,
  Center,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function login() {
  return (
    <Center
      backgroundImage="/login-bg.jpeg"
      height="100vh"
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
    >
      <Box mt={0} padding={10} bg="white" rounded={"sm"} width="374px">
        <Heading fontSize={"2xl"} pl={"15px"}>
          Login
        </Heading>
        <Input
          color="grey.900"
          placeholder="Email"
          mt={4}
          rounded={"sm"}
        ></Input>
        <Input
          placeholder="Password"
          type="password"
          mt={4}
          rounded={"xs"}
        ></Input>

        <Link to={"/add-new"}>
          <Button
            mt={4}
            bg="#4BA48A"
            color={"white"}
            width="100%"
            _hover={{ background: "#52CBA8" }}
          >
            Login
          </Button>
        </Link>

        <Flex justifyContent={"center"} flexDir="column" alignItems={"center"}>
          <Box mt={4}>
            <Link to={"/signup"}>Sign Up</Link>
          </Box>
          <Box height={"1px"} width="55px" bg={"#8C8989"} mt={2} />
        </Flex>
      </Box>
    </Center>
  );
}

export default login;
