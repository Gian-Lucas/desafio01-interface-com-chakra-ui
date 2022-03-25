import { Flex, Heading } from "@chakra-ui/react";

interface BannerContinentProps {
  urlImage: string;
  name: string;
}

export function BannerContinent({ name, urlImage }: BannerContinentProps) {
  return (
    <Flex
      justifyContent={["center", "start"]}
      alignItems={["center", "end"]}
      w="100%"
      bgSize="cover"
      bgImage={`url('${urlImage}')`}
      bgPosition="center"
      height={["150", "300", "500"]}
    >
      <Heading
        textShadow="0px 0px 20px #000"
        px={["5", "10", "14"]}
        mb={["0", "8", "16"]}
        fontWeight="600"
        fontSize={["28", "40", "48"]}
        color="light.headingsAndText"
      >
        {name}
      </Heading>
    </Flex>
  );
}
