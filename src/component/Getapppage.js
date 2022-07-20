import { Center,  SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import AppButton from './AppButton'
import ButtonOn from './ButtonOn'

const Getapppage = () => {
  return (
    <div>
        <Center  >
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={'10'}
          mt={20}
          mx={'auto'} >
            <ButtonOn name='Go To Home Page' link='/'/>
            <AppButton src="https://res.cloudinary.com/mabhi8251/image/upload/v1658300288/Gloitel-fitness/apple_1_rxix4f.png" name="Download ios store" link="https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8"/>
             <AppButton src="https://res.cloudinary.com/mabhi8251/image/upload/v1658299971/Gloitel-fitness/google-play_watgwk.png" name="Get on Goole Play" link="https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8"/>
             </SimpleGrid>
        </Center>
    </div>
  )
}

export default Getapppage