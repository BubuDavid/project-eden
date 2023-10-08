import './Card.css'

const Card = ({ title, link1, link2, link3, link4, imgURL, secondary}) => {
	let extraClass = ''
	if (secondary)
		extraClass = 'red'
	return (
		<div className={'card__container ' + extraClass}>
			<h1 className='card__title'>{ title }</h1>
			{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
			<div className='card__background' style={{backgroundImage: `url(${imgURL})`}}></div>
			<div className='card__overlay'>
				<ul className='card__menu'>
					<li className='card__menu--item'><a href={link1} className='card__menu--link'>Guía del planeta</a></li>
					<li className='card__menu--item'><a href={link2} className='card__menu--link'>Simulación 3D</a></li>
					<li className='card__menu--item'><a href={link3} className='card__menu--link'>Filtro de instagram</a></li>
					<li className='card__menu--item'><a href={link4} className='card__menu--link'>Experiencia VR</a></li>
				</ul>
			</div>

		</div>
	)
}

export default Card
