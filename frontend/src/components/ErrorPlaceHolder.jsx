import {Text, Flex} from '@chakra-ui/react'
const ErrorPlaceHolder = () => {
  return (
   <Flex
   direction={'column'}
   margin={'0 auto'}
   align={'center'}
   gap={6}
   >
    <Text as={'h1'} fontSize={'2xl'}>Oops, Something went wrong!</Text>
    <Text as={'h5'} >We are experiencing an error on our end. Kindly refresh the page.</Text>
   </Flex>
  )
}

export default ErrorPlaceHolder     