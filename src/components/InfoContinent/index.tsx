import { Flex, Text } from "@chakra-ui/react";

interface InfoContinentProps {
  bio: string;
  totalCountries: string;
  totalLanguages: string;
}

export function InfoContinent({
  bio,
  totalCountries,
  totalLanguages,
}: InfoContinentProps) {
  return (
    <Flex
      flexDir={["column", "column", "row"]}
      w="100%"
      justifyContent="space-between"
    >
      <Text
        fontSize={["14", "20", "24"]}
        textAlign="justify"
        mr={["0", "0", "12"]}
        maxW="600"
      >
        {bio}
      </Text>

      <Flex mt={["5", "5", "0"]}>
        <Text textAlign="center" fontSize={["18", "20", "24"]}>
          <Text
            as="span"
            color="highlight.yellow"
            fontSize={["24", "36", "48"]}
          >
            {totalCountries}
          </Text>
          <br />
          países
        </Text>
        <Text textAlign="center" fontSize={["18", "20", "24"]} ml="10">
          <Text
            as="span"
            color="highlight.yellow"
            fontSize={["24", "36", "48"]}
          >
            +{totalLanguages}
          </Text>
          <br />
          línguas
        </Text>
      </Flex>
    </Flex>
  );
}
