
type ListProp<T> = {
	items: T[]
	onClick: (value: T) => void
}
const Lists = <T extends { id: number }>({ items, onClick }: ListProp<T>) => {
	return (
		<div>
			<h2>List of Items</h2>
			{items.map((item) =>
			(
				<div key={item.id} onClick={() => onClick(item)}> {JSON.stringify(item)}</div>
			)
			)}
		</div >
	)
}

export default Lists