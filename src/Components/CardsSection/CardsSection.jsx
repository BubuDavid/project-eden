import './CardsSection.css'

const CardsSection = ({ children, grid }) => {
	let extraClass = ''
	if (grid) extraClass = 'grid'
	return (
		<div className={'cards__section ' + extraClass} id='planets'>
			{ children }
		</div>
	)
}

export default CardsSection
