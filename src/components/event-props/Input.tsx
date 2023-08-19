

type inputProps = {
	value: string
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

//you can destructure props

const input = ({ value, handleChange }: inputProps) => {
	// const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	console.log(event)
	// }
	return (
		<div>
			<input type="text" value={value} onChange={handleChange} />
		</div>
	)
}

export default input