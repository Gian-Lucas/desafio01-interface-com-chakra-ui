import { Flex, Wrap, WrapItem } from "@chakra-ui/react";
import { TravelTypeCard } from "../TravelTypeCard";

import travelTypes from "../../travelTypes.json";

export function TravelTypes() {
  const { types } = travelTypes;
  return (
    <Flex>
      <Wrap
        justify="center"
        spacing={["5", "10", "20"]}
        mt="20"
        px={["5", "10"]}
        mx="auto"
      >
        {types.map((travelType) => (
          <WrapItem key={travelType.text}>
            <TravelTypeCard travelType={travelType} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
}
