import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcComboChart, FcDeployment, FcMindMap } from 'react-icons/fc';
import * as React from "react"

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (

    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcComboChart} w={10} h={10} />}
          title={'Data'}
          text={
            'Building a modern data stack, reporting and analysis of marketing activities, creating PLG automations, enabling operational use cases'
          }
        />
        <Feature
          icon={<Icon as={FcDeployment} w={10} h={10} />}
          title={'Product'}
          text={
            'Product and growth strategy, metrics, research, and advisory'}
        />
        <Feature
          icon={<Icon as={FcMindMap} w={10} h={10} />}
          title={'Marketing'}
          text={
            'Marketing strategy, customer profiles, community engagement, content audits and reviews'
          }
        />
      </SimpleGrid>
    </Box>
  );
}