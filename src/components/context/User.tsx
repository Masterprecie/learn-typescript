import { useContext } from "react"
import { UserContext } from "./UserContext"




const User = () => {

	const userContext = useContext(UserContext)


	const handleLogin = () => {
		if (userContext) {
			userContext.setUser({
				name: 'Precious',
				email: 'text@gmail.com'
			})
		}
	}
	const handleLogout = () => {
		if (userContext) {
			userContext.setUser(null)
		}
	}
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<h2>User is {userContext.user?.name} </h2>
			<h2>User is  {userContext.user?.email}</h2>
		</div>
	)
}

export default User