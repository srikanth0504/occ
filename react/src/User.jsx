import { useContext } from "react"
import { userContext } from "./Pages/Home"

const User = ({name,age}) => {
  const a = useContext(userContext)
  return (
    <div>
      <h2>usecontext value:{a}</h2>
      I am {name}
      <h5>age:{age}</h5>
    </div>
  )
}
export default User