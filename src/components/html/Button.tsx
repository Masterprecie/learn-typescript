
type CustomButtonProp = {
	variant: 'primary' | 'secondary'
	children: string
} & Omit<React.ComponentProps<'button'>, 'children'>
//omit keyboard omits the other values attached to the children

export const CustomButton = ({ variant, children, ...rest }: CustomButtonProp) => {

	return (
		<button className={`class-with-${variant}`}{...rest}>{children}</button>
	)

}