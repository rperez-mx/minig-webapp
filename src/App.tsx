import { Center, Flex } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
  <Flex alignContent={'center'} direction={'column'} height={'calc(100vh)'}>
    <Center flex={1}></Center>
    <Center flex={1}>Tiny IG</Center>
    <Center flex={1} alignContent={'end'}></Center>
  </Flex>

  )
}

export default App;
