import {
  Input,
  Box,
  Button,
  Center,
  Heading,
  InputLeftAddon,
  InputGroup,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Addnew() {
  return (
    <Center height="100vh">
      <Box width={"600px"}>
        <Heading fontSize={"2xl"} pl={"15px"}>
          Details
        </Heading>
        <Input
          placeholder="Add photo of the station"
          mt={4}
          rounded={"sm"}
        ></Input>
        <Input placeholder="Name of the station" mt={4} rounded={"sm"}></Input>
        <Input placeholder="District" mt={4} rounded={"xs"}></Input>
        <InputGroup mt={4}>
          <InputLeftAddon rounded={"xs"} children="+977" />
          <Input type={"tel"} placeholder="Phone Number" rounded={"xs"}></Input>
        </InputGroup>
        <Input placeholder="Plug type" mt={4} rounded={"sm"}></Input>
        <Input placeholder="Price per hour" mt={4} rounded={"sm"}></Input>
        <Button
          mt={4}
          bg="#4BA48A"
          color={"white"}
          width="100%"
          _hover={{ background: "#52CBA8" }}
        >
          Submit
        </Button>
      </Box>
    </Center>
  );
}

export default Addnew;
