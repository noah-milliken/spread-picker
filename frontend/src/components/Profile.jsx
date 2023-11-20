import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

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

  console.log(userid)
  return <div>Profile</div>;
};

export default Profile

