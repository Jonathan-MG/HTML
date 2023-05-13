// rafce - Instalar o react no vscode
import React from 'react'
import Busca from './Busca'
import env from 'react-dotenv'

const App = () => {
  console.log(env.PEXELS_KEY)
  const onBuscaRealizada = (termo) => {
    console.log(termo)
  }
  return (
    <div className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-8">
          <Busca onBuscaRealizada={onBuscaRealizada}/>
        </div>
    </div>
  )
}
export default App