import Header from '../Components/Header/Header'
import MainSection from '../Components/MainSection/MainSection'
import CardsSection from '../Components/CardsSection/CardsSection'
import Card from '../Components/Card/Card'
import OurPlanetSection from '../Components/OurPlanetSection/OurPlanetSection'
import planets from '../data/planets_data'
import './MainView.css'

const MainView = () => {
  return (
    <div className="main__view">
      <img src='https://i.imgur.com/Eb4dQzW.jpeg' alt='Background' className='main__view--bg'/>
      <Header />
      <MainSection />
      <section className='main__mini-hero'>
        Explora nuestro exoplaneta
      </section>
      <CardsSection>
        {/*<CurveSeparator direction={'top'}/>*/}
        <OurPlanetSection />
      </CardsSection>
      <section className='main__mini-hero red'>
        O explora más exoplanetas
      </section>
      <CardsSection grid = {true}>
        {planets.map((planet, index) => (
          <Card 
            key={index}
            title = {planet.title}
            link1 = {planet.link1}
            link2 = {planet.link2}
            link3 = {planet.link3}
            link4 = {planet.link4}
            imgURL = {planet.imgURL}
            secondary = {true}
          />
        ))}
      </CardsSection>
    </div>
  )
}

export default MainView
