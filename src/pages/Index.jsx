import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="blue.500" color="white" padding="1.5rem" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">My Website</Text>
        <Flex>
          <Link href="#" margin="0 1rem">Home</Link>
          <Link href="#" margin="0 1rem">About</Link>
          <Link href="#" margin="0 1rem">Contact</Link>
        </Flex>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to My Website</Text>
          <Text>This is a simple React app with a basic structure.</Text>
        </VStack>
      </Container>
      <Flex as="footer" bg="blue.500" color="white" padding="1rem" justifyContent="center">
        <Text>© 2023 My Website. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;