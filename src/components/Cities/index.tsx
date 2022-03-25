import { Box, Heading, Wrap } from "@chakra-ui/react";
import { CityCard } from "../CityCard";

interface CitiesProps {
  cities: {
    name: string;
    urlImage: string;
    country: {
      name: string;
      flag: string;
    };
  }[];
}

export function Cities({ cities }: CitiesProps) {
  return (
    <Box mx="auto" my={["10"]}>
      <Heading fontSize={["24", "30", "36"]} mb="10">
        Cidades
      </Heading>
      <Wrap
        direction="row"
        justify={["center", "center", "start"]}
        spacing="10"
      >
        {cities.map((city) => {
          return <CityCard key={city.name} city={city} />;
        })}
      </Wrap>
    </Box>
  );
}
