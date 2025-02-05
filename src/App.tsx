


import { Game } from './components/Game'
import { SessionResults } from './components/SessionResults'
import { Start } from './components/Start'
import { useAppSelector } from './redux/hooks'
import { selectSessionResultsLength, selectStartGame } from './redux/selectors'

function App() {
  const startGame = useAppSelector(selectStartGame)
  const sessionResultsLength = useAppSelector(selectSessionResultsLength)


  return (
    <>
      <div className="
    flex
    items-center
    justify-center
    gap-4
    max-w-7xl
    bg-pink-500
  
    min-h-[100dvh]
    overflow-hidden

    sm: flex-wrap


   

 
  ">

        {
          !startGame && sessionResultsLength === 0 &&
          <Start />

        }

        {
          !startGame && sessionResultsLength > 0 &&
          <Game />
        }

        {
          startGame &&
          <Game />

        }

        {
          sessionResultsLength > 0 &&
          <SessionResults />
        }



      </div>


    </>
  )
}

export default App
