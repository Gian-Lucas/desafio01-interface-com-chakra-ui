import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { Header } from "../components/Header";

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
      <Flex
        justifyContent={["center", "start"]}
        alignItems={["center", "end"]}
        bgImage={`url('${continent.urlImage}')`}
        w="100%"
        bgPosition={["center", "center", "right"]}
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
          {continent.name}
        </Heading>
      </Flex>

      <Box maxW="1440" mx="auto" mt={["8", "10", "16"]} px={["5", "10", "14"]}>
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
            {continent.bio}
          </Text>

          <Flex mt={["5", "5", "0"]}>
            <Text textAlign="center" fontSize={["18", "20", "24"]}>
              <Text
                as="span"
                color="highlight.yellow"
                fontSize={["24", "36", "48"]}
              >
                {continent.totalCountries}
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
                +{continent.totalLanguages}
              </Text>
              <br />
              línguas
            </Text>
          </Flex>
        </Flex>

        <Box mx="auto" my={["10"]}>
          <Heading fontSize={["24", "30", "36"]} mb="10">
            Cidades
          </Heading>
          <Wrap
            direction="row"
            justify={["center", "center", "start"]}
            spacing="10"
          >
            {continent.cities.map((city) => {
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

                    <Image
                      boxSize="30"
                      borderRadius="full"
                      src={`${city.country.flag}`}
                    />
                  </Flex>
                </WrapItem>
              );
            })}
          </Wrap>
        </Box>
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
