import * as React from "react"

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react';




export default function Hero() {
  return (

    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: 'column', md: 'row' }}>
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'brand.CaliforniaSage',
              zIndex: -1,
            }}>
            Pedram Navid
          </Text>
          <br />
          <Text fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }} as={'span'} color={'brand.primary'}>
            data ∩ product ∩ marketing
          </Text>
        </Heading>
        <Text color={'gray.500'}>
          I help startups accelerate their growth by advising by advising on product strategy,
          marketing, community, and data, with a focus on data companies.

        </Text>
        <Text color={'gray.500'}>
          I've helped companies build new categories like Reverse ETL by creating valuable content
          for data practitioners. I have a newsletter that has helped shape the product development
          of major companies in the data space. I'd love to work with you.
        </Text>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: 'column', sm: 'row' }}>
          <a href="mailto:info@pedramnavid.com">
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'green'}
              bg={'brand.primary'}
              _hover={{ bg: 'red.200' }}>
              Get In Touch
            </Button></a>
        </Stack>
      </Stack>
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
        <Blob
          w={'150%'}
          h={'150%'}
          position={'absolute'}
          top={'-20%'}
          left={0}
          zIndex={-1}
          color={useColorModeValue('red.50', 'red.400')}
        />
        <Box
          position={'relative'}
          height={'300px'}
          rounded={'2xl'}
          boxShadow={'2xl'}
          width={'full'}
          overflow={'hidden'}>
          <Image
            alt={'Hero Image'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={
              'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
            }
          />
        </Box>
      </Flex>
    </Stack >

  );
}


export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};