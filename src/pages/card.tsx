import React from "react";
import {
  Box,
  AbsoluteCenter,
  SimpleGrid,
  Heading,
  Text,
  Container,
  Button,
  AspectRatio,
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib

export default function CardTravel() {
  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "台北",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Design Projects 2",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
    },
    {
      title: "Design Projects 3",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
  ];

  return (
    <Container maxW="7xl" color="white" mt="150px">
      <SimpleGrid
        position="relative"
        spacing={10}
        objectFit="cover"
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {cards.map((card, index) => (
          <SimpleGrid
            boxShadow={"2xl"}
            position="relative"
            key={index}
            spacing={10}
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          >
            <Card justifyContent={"center"} alignContent={"center"}>
              <CardHeader>
                <AspectRatio ratio={16 / 12} borderRadius="lg">
                  <Image
                    src={card.image}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                </AspectRatio>
                <Heading size="md" mt={"20px"}>
                  {card.title}
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>{card.text}</Text>
              </CardBody>
              <Box position="relative" h="100px">
                <AbsoluteCenter p="4" axis="both">
                  <Button>View here</Button>
                </AbsoluteCenter>
              </Box>
            </Card>
          </SimpleGrid>
        ))}
      </SimpleGrid>
    </Container>
  );
}
