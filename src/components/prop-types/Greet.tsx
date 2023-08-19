
type Greeting = {
	name: string,  //string, number and boolean prop types
	age?: number, //optional prop
	isLoggedIn: boolean
}


//you can destructure props also
const Greet = ({ name, age, isLoggedIn }: Greeting) => {
	// const { age = 1 } = props
	return (
		<div>
			{
				isLoggedIn ? `Hello ${name}, I am learning React typescript again.I am ${age} years old` : `Welcome ${name}`
			}
		</div>

	)
}

export default Greet