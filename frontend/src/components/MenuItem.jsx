import {  Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const MenuItem = (props) => {
    const {children, isLast, to='/', ...rest} = props
  return (
    <Text
    mb={{base: isLast ? 0: 8, sm: 0}}
    mr={{base: 0, sm: isLast ? 0:8}}
    display={"block"}
    {...rest}
    >
        <NavLink to={to}>{children}</NavLink>
         </Text>
  )
}

export default MenuItem