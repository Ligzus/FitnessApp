import { createContext, useState } from "react";

function getUserFromLocalStorage() {
    try {
      return localStorage.getItem("user");
    } catch (error) {
      return null;
    }
  }
  export interface User {
    user?: any;
    loginUser(newUser: any): void;
    logoutUser(): void;
  }
  
  export const UserContext = createContext<User>({} as User);
  
  export const UserProvider = ({ children }: any) => {
    const [user, setUser] = useState(getUserFromLocalStorage());
  
    function loginUser(newUser:any) {
      setUser(newUser);
      localStorage.setItem("user", newUser);
    }
  
    function logoutUser() {
      setUser(null);
      localStorage.removeItem("user");
    }
  
    return (
      <UserContext.Provider value={{ user, loginUser, logoutUser }}>
        {children}
      </UserContext.Provider>
    );
  };