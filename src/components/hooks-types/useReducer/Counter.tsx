import { useReducer } from "react"

type CounterState = {
	count: number
}


//the code below is called descriminated union and it is recommeneded for reducers functions
type UpdateAction = {
	type: 'increase' | 'decrease'
	payload: number
}

type ResetAction = {
	type: 'reset'
}

type CounterAction = UpdateAction | ResetAction


const initialState = { count: 0 }


function reducer(state: CounterState, action: CounterAction) {
	switch (action.type) {
		case 'increase':
			return { count: state.count + action.payload }
		case 'decrease':
			return { count: state.count - action.payload }
		case 'reset':
			return initialState
		default:
			return state
	}
}

const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<div>
			Count:{state.count}
			<button onClick={() => dispatch({ type: 'increase', payload: 10 })}>increase 10</button>
			<button onClick={() => dispatch({ type: 'decrease', payload: 10 })}>decrease 10</button>
			<button onClick={() => dispatch({ type: 'reset' })}>reset</button>
		</div>
	)
}

export default Counter