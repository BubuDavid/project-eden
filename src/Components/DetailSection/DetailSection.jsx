import CircleSeparator from '../CircleSeparator/CircleSeparator'
import './DetailSection.css'

const DetailSection = ({ planetName, type, year, distance}) => {
	return (
		<section className="detail__section section" id='detail__section'>
			<div className='details__container'>
				<div className='details__title'>{planetName}</div>
				<div className='details__boxes'>
					<div className='detail__box'>
						<p className='detail__key'>Tipo de planeta</p>
						<p className='detail__value'>{type}</p>
					</div>
					<div className='detail__box'>
						<p className='detail__key'>Descubierto:</p>
						<p className='detail__value'>{year}</p>
					</div>
					<div className='detail__box'>
						<p className='detail__key'>Distancia</p>
						<p className='detail__value'>{distance}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DetailSection
