import MainView from "./Views/MainView"
import DetailsView from "./Views/DetailsView"
import { useStore } from "./hooks/useStore"

function App() {
  const {
    view, planetID
  } = useStore()

  if (view && planetID === undefined) return <MainView />
  return (
    <>
      {!view || view === 'main' ? <MainView /> : null}
      {view === 'details' ? <DetailsView planetID = {planetID}/> : null}
      {view && view !== 'details' && view !== 'main' ? <MainView /> : null}
    </>
  )
}

export default App
