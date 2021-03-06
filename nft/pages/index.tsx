import type { NextPage } from 'next'
import {Flex, Center,Text, Square, Box} from "@chakra-ui/react"

const Home: NextPage = () => {
  return (
    <Flex color='white'>
      <Center w='100px' bg='green.500'>
        <Text>Box 1</Text>
      </Center>
      <Square bg='blue.500' size='150px'>
        <Text>Box 2</Text>
      </Square>
      <Box flex='1' bg='tomato'>
        <Text>Box 3</Text>
      </Box>
    </Flex>
  )
}

export default Home
