import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Link } from "../Link";

interface HeaderProps {
  buttonBack?: boolean;
}

export function Header({ buttonBack = false }: HeaderProps) {
  if (!buttonBack) {
    return (
      <Flex justifyContent="center" py={["4", "5"]}>
        <Image src="/images/logo.svg" w={["32", "auto"]} />
      </Flex>
    );
  }
  return (
    <Flex justifyContent="space-between" alignItems="center" py={["4", "5"]}>
      {buttonBack && (
        <Link href="/" ml={["0", "16"]}>
          <ChevronLeftIcon w="10" h="10" />
        </Link>
      )}
      <Image src="/images/logo.svg" w={["32", "auto"]} />
      <Box w="10" h="10" ml={["0", "16"]}></Box>
    </Flex>
  );
}
