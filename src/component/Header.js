import {
    Box,
    Flex,
    Text,
    IconButton,
    leftIcon,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,

    useDisclosure,
    Container,
    Image,
  } from '@chakra-ui/react';
  import {EmailIcon } from '@chakra-ui/icons';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
// import IosApp from './IosApp';
// import AndroidApp from './AndroidApp';
import ButtonOn from './ButtonOn';

  
  export default function Header() {
    const { isOpen, onToggle } = useDisclosure(); 

  
    return (
      <Box

      >

        <Flex
          bg={useColorModeValue('gray.100', 'gray.800')}
          color={useColorModeValue('white.600', 'pink.300')}
          minH={'80px'}
          py={{ base: 4 }}
          px={{ base: 4 }}
          w={'full'}
          position={'fixed'}
          zIndex={99}
   
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
            <Container maxW={'7xl'} zIndex={10} position={'relative'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
           
            />
          </Flex>
          <Flex >
            <Text
              // textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              fontWeight={1000}
              color={useColorModeValue('white', 'white')}>
              <Link to='/' >
              <Image
            width={150}
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://res.cloudinary.com/mabhi8251/image/upload/v1658223785/Gloitel-fitness/Gloitel_logo_transperent_-_Bold_sf2hi2.png'
            }
          />
       
              </Link>
            </Text>
  
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={40}  style={{color:'ActiveCaption'}} >
              <DesktopNav />
            </Flex>
          </Flex>
          </Container>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            // justify={'flex-start'}
            direction={'row'}
            spacing={10}
            >
              <ButtonOn  name="Download App Store" link="https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8" />
              <ButtonOn leftIcon={<EmailIcon />} name="Get on Goole Play" link="https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8"/>
             
          
             {/* <IosApp/> */}
            {/* </Button> */}
            {/* <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'m'}
              fontWeight={600}
              color={'white'}
              as={'a'}
              bg={'pink.400'}
              href={'/SignUpPage'}
              _hover={{
                bg: 'gray.500',
              }}> */}
             {/* <AndroidApp/> */}
            {/* </Button> */}
          </Stack>
        </Flex>
     
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
       
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('white.600', 'white.500');
    const linkHoverColor = useColorModeValue('white.500', 'white.500');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'l'}
                  fontWeight={1000}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.1000')}
        p={20}
        zIndex={10}
        position={'fixed'}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={5}
          as={Link}
          href={href ?? '/'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={2}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Home',
      href: '/',
      children: [
        {
          label: 'Cources',
          subLabel: 'Trending Design to inspire you',
          href: '/Cources',
        },
        {
          label: 'Pricing',
          subLabel: 'Up-and-coming Designers',
          href: '/Pricing',
        },
      ],
    },
    {
      label: 'Yoga Instruction',
      href: '/',
      children: [
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '/',
        },
        {
          label: 'Contact',
          subLabel: 'An exclusive list for contract work',
          href: '/ContactPage',
        },
      ],
    },
    {
      label: 'About',
      href: '/About',
    },
    {
      label: 'Touch Trainers',
      href: '/Trainers',
    },
    {
      label: 'Contact Us',
      href: '/ContactPage',
    },
  ];