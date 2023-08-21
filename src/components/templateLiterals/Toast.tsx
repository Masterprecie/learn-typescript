

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'


type ToastProp = {
	position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

const Toast = ({ position }: ToastProp) => {
	return (
		<div>Toast notification - {position}</div>
	)
}

export default Toast