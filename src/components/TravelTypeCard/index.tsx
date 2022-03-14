import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeCardProps {
  travelType: {
    text: string;
    imageName: string;
  };
}

export function TravelTypeCard({ travelType }: TravelTypeCardProps) {
  const { text, imageName } = travelType;
  const isMobile = useBreakpointValue({
    base: false,
    md: true,
  });

  if (!isMobile) {
    return (
      <Flex flexDir="column" alignItems="center">
        <Text fontWeight="bold">
          <Text mr="2" as="span" color="highlight.yellow">
            •
          </Text>
          {text}
        </Text>
      </Flex>
    );
  }
  return (
    <Flex flexDir="column" alignItems="center">
      <Image boxSize="85" src={`/images/${imageName}`} />
      <Text mt="5" fontWeight="bold">
        {text}
      </Text>
    </Flex>
  );
}
