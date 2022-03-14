import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Banner() {
  const isMobile = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <Flex
      px="5"
      py="10"
      bgImage="url('/images/background.svg')"
      justifyContent="space-around"
    >
      <Box>
        <Heading fontWeight="500" color="light.headingsAndText">
          5 Continentes, infinitas possibilidades.
        </Heading>

        <Text mt="5" color="light.info">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>

      {isMobile && <Image src="/images/airplane.svg" mb="-20" />}
    </Flex>
  );
}
