import { ChakraProvider, Container } from '@chakra-ui/react';
import type { HeadFC } from "gatsby";
import * as React from "react";
import theme from "../theme";
import Feature from "./components/features";
import LargeWithAppLinksAndSocial from "./components/footer";
import Hero from "./components/hero";
import Testimonial from "./components/testimonials";

const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={'7xl'}>
        <Hero />
        <Feature />

      </Container >
      <Testimonial />
      <LargeWithAppLinksAndSocial />

    </ChakraProvider>

  );
}



export default IndexPage

export const Head: HeadFC = () => <title>West Marin Data LLC</title>
