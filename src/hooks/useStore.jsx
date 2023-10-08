import { useReducer } from "react"
import { useGetParams } from "./useGetParams"

// Create reducer
const reducer = (state, action) => {
	// Get type
	const { type } = action
	// Restart action
	if (type === 'RESTART_APP') {
		if (window.location.search) {
			const url = new URL(window.location.href);
			url.search = "";
			window.location.href = url
		} 
		return{
			view: '',
			planetID: ''
		}
	}
	if (type === 'SET_VIEW') {
		const { view } = action
		// Check if view
		if (!view)
		return state
		return {
			...state,
			view
		}
	}
	if (type === 'SET_PLANETID') {
		const { planetID } = action
		// Check if view
		if (!planetID)
		return state
		return {
			...state,
			planetID
		}
	}

	// Return state
	return state
}

// Create store
export function useStore() {
	const [{
		planetID,
		view,
	}, dispatch] = useReducer(reducer, {
		planetID: null,
		view: null
	})

	// Create actions dispatchers
	const restartApp = () => dispatch({ type: 'RESTART_APP' })
	const setView = view => dispatch({ type: 'SET_VIEW', view })
	const setPlanetID = planetID => dispatch({ type: 'SET_PLANETID', planetID })
	// Initialize reducer state
	useGetParams(setView, setPlanetID)



	// Return store
	return {
		view,
		planetID,
		restartApp,
		setPlanetID,
		setView
	}
}
