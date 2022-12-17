import {
  Box,
  Flex,
  Icon,
  useDisclosure,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";

const NavItem = (props) => {
  const { icon, children, ...rest } = props;
  return (
    <Flex
      align="center"
      px="4"
      mx="2"
      rounded="md"
      py="3"
      cursor="pointer"
      color="whiteAlpha.700"
      _hover={{
        bg: "blackAlpha.300",
        color: "whiteAlpha.900",
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      {...rest}
    >
      {icon && (
        <Icon
          mr="2"
          boxSize="4"
          _groupHover={{
            color: "gray.300",
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};
const Sidebar = () => {
  const sidebar = useDisclosure();

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="gray.600"
      borderColor="blackAlpha.300"
      borderRightWidth="1px"
      w="60"
    >
      <Flex px="4" py="5" align="center">
        <Text fontSize="2xl" ml="2" color="white" fontWeight="semibold">
          Choc UI
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem>Home</NavItem>
        <NavItem>Articles</NavItem>
        <NavItem>Collections</NavItem>
        <NavItem>Checklists</NavItem>
        <NavItem>Integrations</NavItem>
        <NavItem>Changelog</NavItem>
        <NavItem>Settings</NavItem>
      </Flex>
    </Box>
  );
};

export default Sidebar;
