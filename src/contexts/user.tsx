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
	name: string | undefined;
	loginUser(newUser: any): void;
	logoutUser(): void;
	updateUserName(newName: string): void;
}

export const UserContext = createContext<User>({} as User);

export const UserProvider = ({ children }: any) => {
	const [user, setUser] = useState(getUserFromLocalStorage());
	const [name, setName] = useState<string | undefined>(user?.displayName);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
			if (firebaseUser) {
				setUser(firebaseUser);
				localStorage.setItem("user", JSON.stringify(firebaseUser));
				setName(firebaseUser.displayName || undefined); // Установите имя, если доступно
			} else {
				setUser(null);
				setName(undefined);
				localStorage.removeItem("user");
			}
		});

		return () => unsubscribe();
	}, []);

	function loginUser(newUser: any) {
		setUser(newUser);
		localStorage.setItem("user", JSON.stringify(newUser));
		setName(newUser.displayName); // Установите имя при входе
	}

	function logoutUser() {
		setUser(null);
		setName(undefined);
		localStorage.removeItem("user");
	}

	async function updateUserName(newName: string) {
		if (user) {
			try {
				await user.updateProfile({ displayName: newName });
				setName(newName);
				localStorage.setItem("user", JSON.stringify({ ...user, displayName: newName }));
			} catch (error) {
				console.error("Ошибка при обновлении имени:", error);
			}
		}
	}

	return (
		<UserContext.Provider value={{ user, name, loginUser, logoutUser, updateUserName }}>
			{children}
		</UserContext.Provider>
	);
};
