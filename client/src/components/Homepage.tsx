import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Stack,
  } from '@chakra-ui/react';
  import CustomerInput from "./customer/CustomerInput.jsx"
  

  export default function SplitWithImage() {
    return (
      <Container maxW={'8xl'} py={40}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={10}>
            <Heading>Home Fitness Plan</Heading>
            <Stack>
              <CustomerInput /> 
            </Stack>
          </Stack>
          <Flex>
            <Image
              borderRadius='full'
              boxSize='600px'
              rounded={'3xl'}
              alt={'Lifter'}
              src={
                'https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_960_720.jpg'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }