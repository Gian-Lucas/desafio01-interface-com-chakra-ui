import { Box, Flex, Heading, Image, Text, WrapItem } from "@chakra-ui/react";

interface CityCardProps {
  city: {
    name: string;
    urlImage: string;
    country: {
      name: string;
      flag: string;
    };
  };
}

export function CityCard({ city }: CityCardProps) {
  return (
    <WrapItem
      cursor="pointer"
      transition="0.3s"
      _hover={{
        transform: "scale(1.1)",
      }}
      key={city.name}
      w="fit-content"
      flexDir="column"
      borderBottom="1px"
      borderColor="highlight.yellow"
    >
      <Image w={["256px"]} h="173px" src={`${city.urlImage}`} />
      <Flex
        bg="light.white"
        borderX="1px"
        borderColor="highlight.yellow"
        w="100%"
        px="5"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box pt="5">
          <Heading fontSize="20">{city.name}</Heading>
          <Text my={["5"]} fontSize="16">
            {city.country.name}
          </Text>
        </Box>

        <Image boxSize="30" borderRadius="full" src={`${city.country.flag}`} />
      </Flex>
    </WrapItem>
  );
}
