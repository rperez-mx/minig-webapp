import { Center, Flex } from '@chakra-ui/react'
import { useState } from 'react'

function App() {

  return (
    <Flex flexDirection={'column'} height={'calc(100vh)'} alignContent={'center'}>
    <Center flex={1}></Center>
   <Center flex={1}>
    TinyIG
   </Center>
    <Center flex={1}></Center>
    </Flex>
  )
}

export default App
