

type brothersProps = {
	list: {
		first: string, //Array props type
		last: string
	}[]
}
const PersonList = (props: brothersProps) => {
	return (
		<div>
			{props.list.map((name) => (
				<h3 key={name.first}>{name.first} {name.last}</h3>
			))}
		</div>
	)
}

export default PersonList