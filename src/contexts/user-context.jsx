import { createContext, useContext } from "react"
import { useBooks } from "./books-context";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const { user } = useBooks();

    return (<UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>)
}

export const useUser = () => useContext(UserContext);