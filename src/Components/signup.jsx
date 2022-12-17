import {
  Input,
  Box,
  Button,
  Center,
  Heading,
  Text,
  Flex,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <Center
      mt={0}
      backgroundImage="/login-bg.jpeg"
      height="100vh"
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
    >
      <Box mt={0} padding={10} bg="white" rounded={"sm"} width="374px">
        <Heading fontSize={"2xl"} pl={"15px"}>
          Sign Up
        </Heading>
        <Input placeholder="Name" mt={4} rounded={"sm"}></Input>
        <Input placeholder="Email" mt={4} rounded={"sm"}></Input>
        <Input
          placeholder="Password"
          type="password"
          mt={4}
          rounded={"xs"}
        ></Input>
        <InputGroup mt={4}>
          <InputLeftAddon rounded={"xs"} children="+977" />
          <Input type={"tel"} placeholder="Phone Number" rounded={"xs"}></Input>
        </InputGroup>
        <Link to={"/add-new"}>
          <Button
            mt={4}
            bg="#4BA48A"
            color={"white"}
            width="100%"
            _hover={{ background: "#52CBA8" }}
          >
            Sign Up
          </Button>
        </Link>
        <Flex justifyContent={"center"} flexDir="column" alignItems={"center"}>
          <Box mt={4}>
            <Link to={"/login"}>Login</Link>
          </Box>
          <Box height={"1px"} width="40px" bg={"#8C8989"} mt={2} />
        </Flex>
      </Box>
    </Center>
  );
}

export default Signup;
