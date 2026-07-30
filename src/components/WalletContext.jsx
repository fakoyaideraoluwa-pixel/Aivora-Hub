import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthContext } from "../Context/AuthContext";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const { user, setUser } = useContext(AuthContext);

  const [walletBalance, setWalletBalance] = useState(0);

  useEffect(() => {
    setWalletBalance(user?.wallet || 0);
  }, [user]);

  const updateWallet = (amount) => {
    setWalletBalance(amount);

    if (!user) return;

    const updatedUser = {
      ...user,
      wallet: amount,
    };

    setUser(updatedUser);

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(updatedUser)
    );

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((u) =>
      u.email === updatedUser.email ? updatedUser : u
    );

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );
  };

  return (
    <WalletContext.Provider
      value={{
        walletBalance,
        updateWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};