
type Greeting = {
	name: string,  //string, number and boolean prop types
	age: number,
	isLoggedIn: boolean
}



const Greet = (props: Greeting) => {
	return (
		<div>
			{
				props.isLoggedIn ? `Hello ${props.name}, I am learning React typescript again.I am ${props.age}` : `Welcome ${props.name}`
			}
		</div>

	)
}

export default Greet