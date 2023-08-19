import { createContext, useState } from "react"

type AuthUser = {
	name: string
	email: string
}

type UserContextType = {
	user: AuthUser | null
	setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProp = {
	children: React.ReactNode
}

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProp) => {
	const [user, setUser] = useState<AuthUser | null>(null)
	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}