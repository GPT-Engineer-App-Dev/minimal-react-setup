import { Box, Container, Flex, Text, VStack, Button } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";

const ProtectedContent = () => {
  const { logout } = useSupabaseAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <Box>
      <Flex as="nav" bg="blue.500" color="white" padding="1.5rem" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">My Website</Text>
        <Flex>
          <Button onClick={handleLogout} margin="0 1rem">Logout</Button>
        </Flex>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Protected Content</Text>
          <Text>This content is only visible to authenticated users.</Text>
        </VStack>
      </Container>
      <Flex as="footer" bg="blue.500" color="white" padding="1rem" justifyContent="center">
        <Text>© 2023 My Website. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default ProtectedContent;