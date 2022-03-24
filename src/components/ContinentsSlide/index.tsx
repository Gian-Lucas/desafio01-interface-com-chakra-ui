import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "../Link";

import data from "../../data.json";

export function ContinentsSlide() {
  const { continents } = data;
  return (
    <Swiper
      style={{
        maxWidth: "1080px",
        "--swiper-theme-color": "#FFBA08",
      }}
      slidesPerView={1}
      loop={true}
      navigation={true}
      modules={[Navigation]}
    >
      {continents.map((continent) => (
        <SwiperSlide
          key={continent.name}
          style={{
            backgroundImage: "url('/images/bg-slider.svg')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Flex
            alignItems="center"
            flexDir="column"
            w="fit-content"
            my={["120", "150", "180"]}
            mx="auto"
          >
            <Heading
              fontSize={["24", "36", "48"]}
              color="light.headingsAndText"
            >
              <Link
                _hover={{
                  textDecoration: "none",
                }}
                href={`/${continent.slug}`}
              >
                {continent.name}
              </Link>
            </Heading>

            <Text
              textAlign="center"
              mx="16"
              mt="5"
              fontSize={["14", "17", "20"]}
              fontWeight="bold"
              color="light.info"
            >
              {continent.info}
            </Text>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
