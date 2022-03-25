import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function BannerHome() {
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
        <Heading
          fontSize={["20", "28", "36"]}
          fontWeight="500"
          color="light.headingsAndText"
        >
          6 Continentes, infinitas possibilidades.
        </Heading>

        <Text mt="5" color="light.info" fontSize={["14", "18", "20"]}>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>

      {isMobile && <Image src="/images/airplane.svg" mb="-20" />}
    </Flex>
  );
}
