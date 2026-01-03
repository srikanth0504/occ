import { createContext } from "react"
import Form from "../hooks/Form"
import State from "../hooks/State"
import User from "../User"
export const userContext = createContext()
const Home = () => {
    return (
        <div>
            <userContext.Provider value="Srikanth">
            <Form />
            <State />
            <User name="Srikanth" age={20} />
            </userContext.Provider>
        </div>
    )
}
export default Home
