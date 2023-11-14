import {MdDarkMode, MdLightMode} from 'react-icons/md'
import { Button, Flex, useColorMode } from '@chakra-ui/react'
const colorModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
        <Flex
        align={'center'}
        justify={'center'}
        direction={'column'}
        >
            <Button onClick={() => toggleColorMode()}>
            {colorMode === 'dark' ? <MdLightMode /> : <MdDarkMode/>}
            </Button>

        </Flex>
    </div>
  )
}

export default colorModeToggle