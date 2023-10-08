import { useState } from "react"
import MainView from "./Views/MainView"

function App() {
  const [view, setView] = useState('main')
  return (
    <>
      {!view || view === 'main' ? <MainView /> : null}
    </>
  )
}

export default App
