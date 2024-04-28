// Complete the Index page component for a 3D clothing mockup animation ecommerce store
import { Box, Flex, Text, Button, Image, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart, FaTshirt } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("gray.800", "white");
  const hoverBgColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box bg={bgColor} color={color} minH="100vh" p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Heading as="h1" size="xl" fontWeight="bold" color="midnightblue">
          3D Mockups Store
        </Heading>
        <Button rightIcon={<FaShoppingCart />} colorScheme="yellow" variant="solid">
          Cart
        </Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {mockups.map((mockup) => (
          <Box key={mockup.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden" bg="charcoalgrey">
            <Image src={mockup.image} alt={mockup.name} borderRadius="md" />
            <Flex align="center" mt={2}>
              <FaTshirt />
              <Text ml={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                {mockup.name}
              </Text>
            </Flex>
            <Text mt={2}>{mockup.description}</Text>
            <Button mt={3} colorScheme="yellow" variant="solid" onClick={() => handleAddToCart(mockup)}>
              Buy Now - ${mockup.price}
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

const mockups = [
  {
    id: 1,
    name: "Classic Tee",
    description: "A versatile 3D mockup of a classic tee, perfect for any clothing brand.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMG1vY2t1cCUyMGNsYXNzaWMlMjB0ZWV8ZW58MHx8fHwxNzE0MzEzNjU1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Sportswear Set",
    description: "Dynamic 3D mockup for sportswear, enhancing product displays with realistic animations.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1646343251574-a7b03ee3dbaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMG1vY2t1cCUyMHNwb3J0c3dlYXJ8ZW58MHx8fHwxNzE0MzEzNjU2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Formal Suit",
    description: "Elegant 3D mockup of a formal suit, ideal for high-end fashion brands.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMG1vY2t1cCUyMGZvcm1hbCUyMHN1aXR8ZW58MHx8fHwxNzE0MzEzNjU2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const handleAddToCart = (mockup) => {
  console.log(`Added ${mockup.name} to cart!`);
};

export default Index;
