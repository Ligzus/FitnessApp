import { createContext, useState, useEffect } from "react";
import { auth } from "../../src/utils/firebase";

function getUserFromLocalStorage() {
	try {
		return JSON.parse(localStorage.getItem("user") || "null");
	} catch (error) {
		return null;
	}
}

export interface User {
	user: any;
	loginUser(newUser: any): void;
	logoutUser(): void;
}

export const UserContext = createContext<User>({} as User);

export const UserProvider = ({ children }: any) => {
	const [user, setUser] = useState(getUserFromLocalStorage());

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
			if (firebaseUser) {
				setUser(firebaseUser);
				localStorage.setItem("user", JSON.stringify(firebaseUser));
			} else {
				setUser(null);
				localStorage.removeItem("user");
			}
		});

		return () => unsubscribe();
	}, []);

	function loginUser(newUser: any) {
		setUser(newUser);
		localStorage.setItem("user", JSON.stringify(newUser));
	}

	function logoutUser() {
		setUser(null);
		localStorage.removeItem("user");
	}

	return <UserContext.Provider value={{ user, loginUser, logoutUser }}>{children}</UserContext.Provider>;
};
