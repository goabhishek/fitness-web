import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  InputRightElement,
  FormControl,
  InputGroup,
  Checkbox,
  Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import ButtonOn from '../component/ButtonOn';

const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://res.cloudinary.com/mabhi8251/image/upload/v1657962931/Gloitel-fitness/Amit_hzyvwk.jpg',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://res.cloudinary.com/mabhi8251/image/upload/v1657962931/Gloitel-fitness/Amit_hzyvwk.jpg',
  },
  {
    name: 'Kent Dodds',
    url: 'https://res.cloudinary.com/mabhi8251/image/upload/v1657962931/Gloitel-fitness/Amit_hzyvwk.jpg',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://res.cloudinary.com/mabhi8251/image/upload/v1657962931/Gloitel-fitness/Amit_hzyvwk.jpg',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://res.cloudinary.com/mabhi8251/image/upload/v1657962931/Gloitel-fitness/Amit_hzyvwk.jpg',
  },
];

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading lineHeight={1.1} fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            you can workout wherever you want, however you want{' '}
            <Text as={'span'} bgGradient='linear(to-r, red.400,pink.400)' bgClip='text'>
              &
            </Text>{' '}
            whenever you want across any of our 5,500+ partner gyms and fitness
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  // size={useBreakpointValue({ base: 'md', md: 'lg' })}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, red.400,pink.400)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              width={useBreakpointValue({ base: '44px', md: '60px' })}
              height={useBreakpointValue({ base: '44px', md: '60px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack bg={'gray.50'} rounded={'xl'} p={{ base: 4, sm: 6, md: 8 }} spacing={{ base: 8 }} maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading color={'gray.800'} lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Sign in to your account
              <Text as={'span'} bgGradient='linear(to-r, red.400,pink.400)' bgClip='text'>
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              We???re providing best services just like fitness ! Become a part of our rockstar Fitness team and skyrocket
              your Health!
            </Text>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder='Enter Your Mail/Number'
                bg={'gray.100'}
                type='email'
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />

              <FormControl id='password' isRequired>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter Your Password'
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                  />
                  <InputRightElement h={'full'}>
                    <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Stack>

            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} mt={8} justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link href='/ForgetPassword' color={'blue.400'}>
                Forgot password?
              </Link>
            </Stack>
            <Stack mt={8} w={'24'} fontFamily={'heading'}>
              <ButtonOn name='Submit' link='/' />
            </Stack>
            {/* <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}>
              Submit
            </Button> */}
          </Box>
          form
        </Stack>
      </Container>
      {/* <Blur position={'absolute'} top={-10} left={-10} style={{ filter: 'blur(70px)' }} /> */}
    </Box>
  );
}

// export const Blur = (props: IconProps) => {
//   return (
//     <Icon
//       width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
//       zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
//       height='560px'
//       viewBox='0 0 528 560'
//       fill='none'
//       xmlns='http://www.w3.org/2000/svg'
//       {...props}
//     >
//       <circle cx='71' cy='61' r='111' fill='#F56565' />
//       <circle cx='244' cy='106' r='139' fill='#ED64A6' />
//       <circle cy='291' r='139' fill='#ED64A6' />
//       <circle cx='80.5' cy='189.5' r='101.5' fill='#ED8936' />
//       <circle cx='196.5' cy='317.5' r='101.5' fill='#ECC94B' />
//       <circle cx='70.5' cy='458.5' r='101.5' fill='#48BB78' />
//       <circle cx='426.5' cy='-0.5' r='101.5' fill='#4299E1' />
//     </Icon>
//   );
// };
