import { Divider, Heading } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { ContinentsSlide } from "../components/ContinentsSlide";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider
        border="1px"
        bg="dark.headingsAndText"
        w="20"
        mx="auto"
        my="10"
      />
      <Heading
        fontSize={["20", "28", "36"]}
        mb="10"
        textAlign="center"
        fontWeight="500"
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <ContinentsSlide />
    </>
  );
}
