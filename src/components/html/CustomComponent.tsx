import Greet from "../prop-types/Greet"

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
	return (
		<div>{props.name}</div>
	)
}
