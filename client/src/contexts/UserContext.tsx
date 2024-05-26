import { ReactNode, createContext, useState } from 'react';
export interface IUserContextProviderProptTypes {
  children: ReactNode;
}
export interface UserContextType {
  userDetails: IUserDetails;
  setUserDetails: (userDetail: IUserDetails) => void;
}
interface IUserDetails {
  username?: string;
  userId?: string;
}
export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({
  children,
}: IUserContextProviderProptTypes) => {
  const [userDetails, setUserDetails] = useState({});
  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
