import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

const Profile = () => {
  const {userid} = useParams()
  const [profileData, setProfileData] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8080/users/${userid}/profile/`)
      .then(res => {
        console.log(res.data)
        setProfileData(res.data)
      })
  })

  console.log(userid)
  return <div>Profile</div>;
};

export default Profile

