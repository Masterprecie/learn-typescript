import { useState } from "react"

const Login = () => {

	const [isLoggedIn, setIsLoggedIn] = useState(true)

	const handleLogin = () => {
		setIsLoggedIn(true)
	}
	const handleLogout = () => {
		setIsLoggedIn(false)
	}


	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<div>User is {isLoggedIn ? 'logged in' : 'logged out'} </div>

		</div >
	)
}

export default Login

//Note: Type is has a built in function called type inference that is smart enough to know the type of state value passed based on it's initial state but for a more complex app whereby the state is not known until the future the state value would have to be defined. check the next example in the user component