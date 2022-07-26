import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  ChakraProvider,
  useColorModeValue,
  Image,
  FormControl,
  Input,
  FormLabel,
  InputLeftElement,
  InputGroup,
  extendTheme,
  Select,
} from '@chakra-ui/react';
import React from 'react';
import ButtonOn from '../component/ButtonOn';

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
};

export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label': {
              ...activeLabelStyles,
            },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'blackAlpha.100',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
            },
          },
        },
      },
    },
  },
});

const CarrerPage = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={100} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Carrier page</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 10, md: 10, lg: 10 }}>
          hello
        </Stack>
      </Container>
      <Flex>
        <Container maxW={'2xl'}>
          <Stack spacing={10} align={'center'}>
            <Heading>Fitness is your next destination</Heading>
            <Text>
              An enthusiasm filled, inspiring and dignified work atmosphere where the focus is primarily on innovation
              and growth. We believe in the collective power of the intellects and also respect the individuality of
              everyone working with us.
            </Text>
            <ButtonOn name='About us' link='/About' />
            <ChakraProvider theme={theme}>
              <FormLabel
                fontSize={{
                  base: '2xl',
                  md: '3xl',
                }}
              >
                Contact Us
              </FormLabel>
              <Box p={3}>
                <FormControl variant='floating' id='first-name' isRequired isInvalid>
                  <Input placeholder=' ' />

                  <FormLabel opacity={'1.5'}>Full Name</FormLabel>
                </FormControl>
                <FormControl isRequired isInvalid pt={10}>
                  <Select placeholder='Select Post'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                  </Select>
                </FormControl>

                <InputGroup py={10}>
                  <InputLeftElement />

                  <FormControl variant='floating' id='website link' isRequired isInvalid paddingRight={4}>
                    <Input placeholder=' ' />
                    <FormLabel opacity={'1.5'}>Mobile Number</FormLabel>
                  </FormControl>
                  <FormControl variant='floating' id='website link' isRequired isInvalid>
                    <Input placeholder=' ' />
                    <FormLabel opacity={'1.5'}>E-mail</FormLabel>
                  </FormControl>
                </InputGroup>

                <FormControl variant='floating' id='website link' isRequired isInvalid>
                  <Input placeholder=' ' height={150} />
                  <FormLabel opacity={'1.5'}>Write details here </FormLabel>
                </FormControl>
              </Box>
              <ButtonOn name='Submit Here' link='/' />
            </ChakraProvider>
          </Stack>
        </Container>
        <Container maxW={'2xl'} bg={'blackAlpha.900'} display={{ base: 'none', md: 'block' }}>
          <Stack align={'flex-start'} m={5}>
            <Image
              width={350}
              rounded={'md'}
              alt={'feature image'}
              src={'https://res.cloudinary.com/mabhi8251/image/upload/v1657696029/Gloitel-fitness/Layer_14_qeaxvc.png'}
            />{' '}
          </Stack>
          <Stack spacing={10} align={'flex-end'} m={5}>
            <Image
              width={350}
              rounded={'md'}
              alt={'feature image'}
              src={'https://res.cloudinary.com/mabhi8251/image/upload/v1657696029/Gloitel-fitness/Layer_14_qeaxvc.png'}
            />
          </Stack>
          <Stack align={'flex-start'} m={5}>
            <Image
              width={350}
              rounded={'md'}
              alt={'feature image'}
              src={'https://res.cloudinary.com/mabhi8251/image/upload/v1657696029/Gloitel-fitness/Layer_14_qeaxvc.png'}
            />
          </Stack>
        </Container>
      </Flex>
    </Box>
  );
};

export default CarrerPage;
