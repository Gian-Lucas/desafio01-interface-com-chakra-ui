import { Box, Flex, Heading, Text, Wrap } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { BannerContinent } from "../components/BannerContinent";
import { Cities } from "../components/Cities";
import { CityCard } from "../components/CityCard";
import { Header } from "../components/Header";
import { InfoContinent } from "../components/InfoContinent";

import data from "../data.json";

interface Continent {
  urlImage: string;
  name: string;
  slug: string;
  bio: string;
  totalCountries: string;
  totalLanguages: string;
  cities: {
    name: string;
    urlImage: string;
    country: {
      name: string;
      flag: string;
    };
  }[];
}

export default function Continent(props) {
  const continent: Continent = props.continent;

  return (
    <>
      <Header buttonBack />

      <BannerContinent name={continent.name} urlImage={continent.urlImage} />

      <Box maxW="1440" mx="auto" mt={["8", "10", "16"]} px={["5", "10", "14"]}>
        <InfoContinent
          bio={continent.bio}
          totalCountries={continent.totalCountries}
          totalLanguages={continent.totalLanguages}
        />

        <Cities cities={continent.cities} />
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const continents: Continent[] = data.continents;
  const continentSlug = context.params.continent;
  const continent = continents.find((cont) => cont.slug === continentSlug);

  return {
    props: {
      continent,
    },
  };
};
