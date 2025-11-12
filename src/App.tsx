import './App.css'
import ReceptTitle from './components/ReceptTitle/ReceptTitle'
import { Test_Data } from './data/recepts'

function App() {

  const receptDivs = Test_Data.map((recept) => (
    <ReceptTitle name={recept.title} />
  ))

  return (
    <div className='craft-container'>
      <div className='left-container'>
        <div className='craft-title'>
          Крафт предметов:
        </div>

        <div className='recepts-container'>
          {receptDivs}
        </div>
      </div>

      <div className='right-container'>

      </div>
    </div>
  )
}

export default App
