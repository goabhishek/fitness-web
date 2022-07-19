import React from 'react'
 import {  Button, } from '@chakra-ui/react'
const ButtonOn = (props) => {
  return (
    <div>
      <Button colorScheme='black' variant='outline' _hover={{
                    textDecoration: 'none',
                    color: 'white',
                    bg: 'gray.900', }}
                    as={'a'}
                    href={props.link}
                    >
    {props.name}
  </Button>
    </div>
  )
}

export default ButtonOn