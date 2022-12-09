import React from 'react'
import { useContext } from 'react'
import Card from '../Components/Card'
import { GlobalContext }from '../Components/utils/GLobalContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentists } = useContext(GlobalContext)
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists?.map((dentist) => 
        <Card 
          key={dentist.id}
          id={dentist.id}
          name={dentist.name} 
          username={dentist.username}
        />
        )}
      </div>
    </main>
  )
}

export default Home