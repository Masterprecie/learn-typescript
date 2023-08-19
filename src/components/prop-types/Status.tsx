type StatusProps = {
	status: 'loading' | 'success' | 'error' //this checks for any of the messages validation in the prop typ, it is called multiple string prop type
}


const Status = (props: StatusProps) => {
	let message
	if (props.status === 'loading') {
		message = 'Loading...'
	} else if (props.status === 'success') {
		message = 'Data fetched successfully'
	} else if (props.status === 'error') {
		message = 'Error fetching data'
	}



	return (
		<div>
			<h2>Status - {message} </h2>
		</div>
	)
}

export default Status