import Header from "../Components/Header/Header"
import DetailSection from "../Components/DetailSection/DetailSection"
import TresD from "../Components/TresD/TresD"
import planets from "../data/planets_data"

const DetailsView = ({planetID}) => {
  const currentPlanet = planets[parseInt(planetID)]
  const {planetName, type, year, distance} = currentPlanet
  return (
    <div className="details__view">
      <img src='https://i.imgur.com/sXIJcVc.jpg' alt='Background' className='main__view--bg'/>
      <Header />
      <DetailSection 
        planetName = {planetName}
        type = {type}
        year = {year}
        distance = {distance}
      />
      <TresD planetID={planetID}/>
    </div>
  )
}

export default DetailsView
