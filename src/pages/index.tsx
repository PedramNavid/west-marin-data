import * as React from "react"
import type { HeadFC } from "gatsby"
import { ChakraProvider, Container } from '@chakra-ui/react'
import Hero from "./components/hero";
import Feature from "./components/features"
import Testimonial from "./components/testimonials";
import LargeWithAppLinksAndSocial from "./components/footer";
import theme from "../theme"
import ContactFormWithSocialButtons from "./components/contact";

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

export const Head: HeadFC = () => <title>Home Page</title>
