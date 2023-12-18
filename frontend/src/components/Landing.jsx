import { Flex, Heading, Image, Container, Text, Button } from "@chakra-ui/react"


const Landing = () => {
    return (
        <>
            <Flex
                align="center"
                justify={{ base: "center", md: "space-around", xl: "space-between" }}
                direction={{ base: "column-reverse", md: "row" }}
                wrap="no-wrap"
                minH="70vh"
            >
                <Flex
                width={'100%'}
                direction={{ base: "column-reverse", md: "row" }}
                justify={'center'}
                >
                    
                    <Flex
                    width={{base: '100%', md: '40%'}}
                    direction="column"
                    align={'center'}
                    justify={'space-evenly'}
                    
                    >

                        
                        <Container
                            maxW={{base: '100%', md: '90%'}} 
                        >
                            <Heading
                            size='lg'
                            marginBottom={9}
                            >Welcome to Spread-Picker</Heading>

                            <Text>Spread picker can help you track your NFL picks against the spread. You can play againse your friends and in different Groups.</Text>
                        </Container>
                        <Flex
                        width={{base: '80%', md: '70%'}}
                        direction={'row'}
                        justify={'space-around'}
                        >
                            <Button variant={'solid'} colorScheme="blue">Sign Up!</Button>
                            <Button variant={'solid'} colorScheme="blue">Login</Button>
                        </Flex>
                     
                    </Flex>
                    <Image
                    width={{base: '100%', md: '60%'}}
                    
                    src='https://placehold.co/600x400?text=Spread+Picker' />
                </Flex>
                

            </Flex>
        </>
    )
}

export default Landing