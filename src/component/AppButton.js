import React from 'react'
 import {  Button,Image } from '@chakra-ui/react'
const AppButton = (props) => {
  return (
    <div>
      <Button colorScheme='black' variant='outline' _hover={{
                    textDecoration: 'none',
                    color: 'white',
                    bg: 'gray.900', }}
                    as={'a'}
                    pr={7}
                    pl={7}
                    href={props.link}
                    >
    <Image width={7} src={
              props.src
            } />{props.name} 
  </Button>
    </div>
  )
}

export default AppButton