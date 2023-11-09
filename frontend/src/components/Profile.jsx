import { useParams } from "react-router-dom";

const Profile = () => {
  const {userid} = useParams()

  console.log(userid)
  return <div>Profile</div>;
};

export default Profile

