type fullNameProps = {
	fullName: {
		first: string, //object props type
		last: string
	}

}



const Person = (props: fullNameProps) => {
	return (
		<div>My name is {props.fullName.first} {props.fullName.last} </div>
	)
}

export default Person