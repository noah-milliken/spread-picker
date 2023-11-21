import { useEffect, useState } from "react";
import {Flex} from '@chakra-ui/react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import Standings from "./Standings";

const Profile = () => {
  const {userid} = useParams()
  const [profileData, setProfileData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/${userid}/profile/`)
        setProfileData(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  },[])

  
  return <Flex>
      <Standings userid={userid} />
  </Flex>
};

export default Profile

