import React from 'react';
import {
  Stack,
  Flex,
  Button,
  Text,
  useBreakpointValue,
  Container,
  Box,
  Heading,
  SimpleGrid,
  Image,
  Center,
} from '@chakra-ui/react';

import ButtonOn from '../component/ButtonOn';
import Trainers from './Trainers';

// interface FeatureProps {
//   text: string;
//   iconBg: string;
//   icon?: ReactElement;
// }

// const Feature = ({ text, icon, iconBg }: FeatureProps) => {
//   return (
//     <Stack direction={'row'} align={'center'}>
//       <Flex
//         w={8}
//         h={8}
//         align={'center'}
//         justify={'center'}
//         rounded={'full'}
//         bg={iconBg}>
//         {icon}
//       </Flex>
//       <Text fontWeight={600}>{text}</Text>
//     </Stack>
//   );
// };

const StatsText = ({ children }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

export default function Home() {
  const data = [
    {
      image: 'https://res.cloudinary.com/mabhi8251/image/upload/v1658309733/Gloitel-fitness/family_peencx.png',
      text: ' Lorem ipsum dolor sit amet, consetetur ',
    },
    {
      image: 'https://res.cloudinary.com/mabhi8251/image/upload/v1658309752/Gloitel-fitness/siblings_kynmxh.png',
      text: ' Lorem ipsum dolor sit amet, consetetur ',
    },
    {
      image: 'https://res.cloudinary.com/mabhi8251/image/upload/v1658309772/Gloitel-fitness/gymnastics_opatjo.png',
      text: ' Lorem ipsum dolor sit amet, consetetur ',
    },
    {
      image: 'https://res.cloudinary.com/mabhi8251/image/upload/v1658309787/Gloitel-fitness/plan_qdieqw.png',
      text: ' Lorem ipsum dolor sit amet, consetetur ',
    },
  ];

  const stats = [
    {
      title: '10+',
      content: (
        <>
          <StatsText>Our modules</StatsText> A Connected Fitness Ecosystem
        </>
      ),
    },
    {
      title: '24/7',
      content: (
        <>
          <StatsText>Analytics</StatsText> enabled right in your dashboard without history limitations
        </>
      ),
    },
    {
      title: '13%',
      content: (
        <>
          <StatsText>Farms</StatsText> in North America has chosen NewLife™ as their management solution
        </>
      ),
    },
    {
      title: '250M+',
      content: (
        <>
          <StatsText>Plants</StatsText> currently connected and monitored by the NewLife™ software
        </>
      ),
    },
  ];

  return (
    <>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'} mt={10}>
          <Stack mt={10} spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                // position={'relative'}/
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}
              >
                Your Fitness
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Meet the All-New
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and
              moonlighters.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <ButtonOn name='Contact With Us' link='/ContactPage' />
              {/* <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Create Project
            </Button> */}

              {/* <Button rounded={'full'}>How It Works</Button> */}
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            height={800}
            src={'https://res.cloudinary.com/mabhi8251/image/upload/v1658228888/Gloitel-fitness/01_preview1_siltyd.png'}
          />
        </Flex>
      </Stack>
      <Center py={5} display={{ base: 'none', md: 'inline-flex' }}>
        {data.map((item) => (
          <Box
            maxW={'350px'}
            w={'full'}
            bg={'gray.100'}
            boxShadow={'3xl'}
            rounded={'md'}
            p={15}
            margin={5}
            borderRadius={10}
            // overflow={'hidden'}
          >
            <Box mb={6} pos={'relative'}>
              <Image src={item.image} layout={'fill'} />
            </Box>
            <Stack>
              <Text color={'gray.800'}>{item.text}</Text>
            </Stack>
          </Box>
        ))}
      </Center>
      <Trainers />
      <Container maxW={'3xl'}>
        <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
          <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
            Make money from <br />
            <Text as={'span'} color={'green.400'}>
              your audience
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Monetize your content by charging your most loyal readers and reward them loyalty points. Give back to your
            loyal readers by granting them access to your pre-releases and sneak-peaks.
          </Text>
          <Stack direction={'column'} spacing={3} align={'center'} alignSelf={'center'} position={'relative'}>
            {/* <Button
      colorScheme={'green'}
      bg={'green.400'}
      rounded={'full'}
      px={6}
      _hover={{
        bg: 'green.500',
      }}>
      Get Started
    </Button> */}
            <ButtonOn name='Get started' link='/SignUpPage' />
            <Button variant={'link'} colorScheme={'green.500'} size={'sm'}>
              Learn more
            </Button>
            <Box>
              {/* <Icon
        as={Arrow}
        color={useColorModeValue('gray.800', 'gray.300')}
        w={71}
        position={'absolute'}
        right={-71}
        top={'10px'}
      /> */}
              <Text
                fontSize={'lg'}
                fontFamily={'Caveat'}
                position={'absolute'}
                right={'-125px'}
                top={'-15px'}
                transform={'rotate(10deg)'}
              >
                Starting at $15/mo
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>

      {/* <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our Story
          </Text>
          <Heading>A digital Product design agency</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Business Planning'}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Financial Planning'}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Market Analysis'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
      </Container>
      <Container maxW={'5xl'} py={12}>
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          // icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Lifetime Support'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          // icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Unlimited Donations'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          // icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>
    </Container> */}
      <Box bg={'gray.800'} position={'relative'}>
        <Flex
          flex={1}
          zIndex={0}
          display={{ base: 'none', lg: 'flex' }}
          backgroundImage="url('https://res.cloudinary.com/mabhi8251/image/upload/v1637396496/samples/bike.jpg')"
          backgroundSize={'cover'}
          backgroundPosition='center'
          backgroundRepeat='no-repeat'
          position={'absolute'}
          width={'50%'}
          insetY={0}
          right={0}
        >
          <Flex bgGradient={'linear(to-r, gray.800 10%, transparent)'} w={'full'} h={'full'} />
        </Flex>
        <Container maxW={'7xl'} zIndex={10} position={'relative'}>
          <Stack direction={{ base: 'column', lg: 'row' }}>
            <Stack flex={1} color={'gray.400'} justify={{ lg: 'center' }} py={{ base: 4, md: 20, xl: 60 }}>
              <Box mb={{ base: 8, md: 20 }}>
                <Text
                  fontFamily={'heading'}
                  fontWeight={700}
                  textTransform={'uppercase'}
                  mb={3}
                  fontSize={'xl'}
                  color={'gray.500'}
                >
                  Technology
                </Text>
                <Heading color={'white'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                  21st century agriculture
                </Heading>
                <Text fontSize={'xl'} color={'gray.400'}>
                  The NewLife™ technology allows you to monitor your crops and get complete insights at real time. The
                  proprietary software/hardware ecosystem prevents your plants from getting neglected.
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {stats.map((stat) => (
                  <Box key={stat.title}>
                    <Text fontFamily={'heading'} fontSize={'3xl'} color={'white'} mb={3}>
                      {stat.title}
                    </Text>
                    <Text fontSize={'xl'} color={'gray.400'}>
                      {stat.content}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
            <Flex flex={1} />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
