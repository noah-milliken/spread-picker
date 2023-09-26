import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <>
    <div>Page Not found</div>
    <p>Back to <Link to='/'>Home</Link>.</p>
    </>
    
  )
}

export default NotFound