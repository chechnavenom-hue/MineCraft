import { useState } from 'react'
import './App.css'
import CraftDisplay from './components/CraftDisplay/CraftDisplay'
import ReceptTitle from './components/ReceptTitle/ReceptTitle'
import { Test_Data, type ReceptT } from './data/recepts'


function App() {
  const [recept, setRecept] = useState<ReceptT>(Test_Data[0])

  const handleClick = (curRecept: ReceptT) => {
    setRecept(curRecept)
  }

  const receptDivs = Test_Data.map((receptEl) => (
    <div onClick={() => handleClick(receptEl)}>
      <ReceptTitle key={receptEl.id} name={receptEl.title} isSelected={recept.id === receptEl.id} />
    </div>
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
        <CraftDisplay recept={recept} />
      </div>
    </div>
  )
}

export default App
