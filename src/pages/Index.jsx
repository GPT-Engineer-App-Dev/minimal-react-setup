import { Box, Container, Flex, Text, VStack, Link, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useSupabaseAuth, SupabaseAuthUI } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) console.error("Error logging in:", error.message);
  };

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
          {!session ? (
            <VStack spacing={4}>
              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleLogin}>Login</Button>
            </VStack>
          ) : (
            <Button onClick={logout}>Logout</Button>
          )}
        </VStack>
      </Container>
      <Flex as="footer" bg="blue.500" color="white" padding="1rem" justifyContent="center">
        <Text>© 2023 My Website. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;