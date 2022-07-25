import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
} from '@chakra-ui/react';

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('gray.100', 'gray.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'5xl'} py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={8}>
          <Stack spacing={6} align={'center'}>
            <Box>
              {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
              <Text fontFamily={'heading'} color={useColorModeValue('black', 'white')}>
                FITNESS
              </Text>
            </Box>
            <Container maxW={'2xl'}>
              <Text fontSize={'sm'}>Registered as Hunger Heroes. Under Indian Society Registration Act XXI, 1860</Text>
              <br />
              <Text fontSize={'sm'}>
                All donations are tax-exempted as eligible under section 80G of the Income Tax Act, 1961.
              </Text>
            </Container>
            <Stack direction={'row'} spacing={6}></Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Who we Are</ListHeader>
            <Link to='/About'>About us</Link>
            <Link href={'/Peoples'}>Our Teams</Link>
            <Link href={'/Trainers'}>Fitness Trainer</Link>
            <Link to='../contactUs'>Contact us</Link>
            <Link href={'#'}>Policies</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Get Involved</ListHeader>
            <Link href={'/CarrerPage'}>Carrer</Link>
            <Link href={'/Pricing'}>Pricing</Link>
            <Link href={'/Trainers'}>Touch with Trainer</Link>
            <Link href={'#'}>Partner with us</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Our Social Contects</ListHeader>
            <Stack direction={'row'}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
              {/* <Stack align={'flex-start'}>
            <ListHeader>Install App</ListHeader>
            <AppStoreBadge />
            <PlayStoreBadge />
          </Stack> */}
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
