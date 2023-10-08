import { useEffect } from "react"

// Extracting the query params from the url in a custom hook
export const useGetParams = (set_view, setPlanetID) => {

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search)
		const view = urlParams.get("view")
		const planetID = urlParams.get("planetID")
		set_view(view)
		setPlanetID(planetID)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return true
}
