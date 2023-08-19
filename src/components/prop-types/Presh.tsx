type PreshProp = {
	children: React.ReactNode //children prop type
}

const Presh = (props: PreshProp) => {
	return (
		<div>{props.children}</div>
	)
}

export default Presh