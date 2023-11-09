import { Button, Flex, Text } from '@chakra-ui/react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
const [users, setUsers] = useState([])

useEffect(() => {
  axios.get('http://localhost:8080/users/')
  .then(res => {
    console.log(res.data)
    setUsers(res.data)
  }).catch(err => {
    console.log(err)
  })

},[])

  return (
    <Flex
    minH={'100%'}
    minWidth={'100%'}
   >
      <Flex 
      bg={'purple.300'}
      display={{ base: "none", sm: "block" }}
      border={'solid'}
      minH={'100%'}
      minW={'50%'}
      maxW={'50%'}
      didplay={['none', 'flex']}
      >
      
      </Flex>
    
    <Flex
    border={'1px tomato solid'}
    pl={6}
    direction={'column'}
    height={'100%'}
    minWidth={'50%'}
    gap={3}
    >
      {users.map((user, index) => (
        <Flex  
        key={index}
        align={'flex-start'}
        justifyContent={'space-between'}
        alignItems={'center'}
        >
            <Text>{user.first_name}   {user.last_name}</Text>
            <Button variant={'outline'} 
            onClick={console.log(`${user.user_id}`)}
            >
              <NavLink to={`profile/${user.user_id}`}>Login</NavLink>
            </Button>
        </Flex>
      ))}

    </Flex>
    </Flex>
  
    )
};

export default Home;
