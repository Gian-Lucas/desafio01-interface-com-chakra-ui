import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex justifyContent="center" py="5">
      <Image src="/images/logo.svg" />
    </Flex>
  );
}
