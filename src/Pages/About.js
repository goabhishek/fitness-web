import { Box, Container, Heading, SimpleGrid, Icon, Text, Stack, HStack, VStack, Button, Flex } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function(x, i) {
  return {
    id: i,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  };
});

export default function About() {
  return (
    <>
      <Container maxW={'5xl'} pt={100}>
        <Stack textAlign={'center'} align={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
          <Heading fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
            What is{' '}
            <Text as={'span'} color={'orange.400'}>
              Fitness?
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Fitness was founded in January 2022 by Gloitel, a software engineer who transformed himself while working a
            8-hour/day IT job. He created the fundamental training methodology & shared it through his free book “Get
            Shredded” to prove that anyone can get fit with the knowledge of Quantified Nutrition. The fitness mantra
            underpinning Fitness is to educate and empower the end-user to transform & inspire others to get fit.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button rounded={'full'} px={6} colorScheme={'orange'} bg={'orange.400'} _hover={{ bg: 'orange.500' }}>
              Get started
            </Button>
            <Button rounded={'full'} px={6}>
              Learn more
            </Button>
          </Stack>
          <Flex w={'full'}></Flex>
        </Stack>
      </Container>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>This is the headline</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
          </Text>
        </Stack>

        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
