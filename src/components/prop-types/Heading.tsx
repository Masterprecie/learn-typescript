type HeadingProp = {
	children: string //children prop type
}

const Heading = (props: HeadingProp) => {
	return (
		<div>
			<h2>{props.children}</h2>
		</div>
	)
}

export default Heading