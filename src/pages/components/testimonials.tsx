import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import * as React from "react"

export default function Testimonial() {
    return (
        <Stack
            bg={useColorModeValue('gray.50', 'gray.800')}
            py={16}
            px={8}
            spacing={{ base: 8, md: 10 }}
            align={'center'}
            direction={'column'}>
            <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                textAlign={'center'}
                maxW={'3xl'}>
                Sick Dashboards
            </Text>
            <Box textAlign={'center'}>
                <Avatar
                    src={
                        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'}
                    alt={'Nikko - SQL GOD'}
                    mb={2}
                />

                <Text fontWeight={600}>Nikko</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
                    SQL GOD
                </Text>
            </Box>
        </Stack>
    );
}