import Header from "../Components/Header/Header"
import DetailSection from "../Components/DetailSection/DetailSection"
import planets from "../data/planets_data"

const DetailsView = ({planetID}) => {
  const currentPlanet = planets[parseInt(planetID)]
  const {planetName, type, year, distance} = currentPlanet
  return (
    <div className="details__view">
      <img src='https://i.imgur.com/Eb4dQzW.jpeg' alt='Background' className='main__view--bg'/>
      <Header />
      <DetailSection 
        planetName = {planetName}
        type = {type}
        year = {year}
        distance = {distance}
      />
    </div>
  )
}

export default DetailsView
