import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './cards/Card'
import CardsDY from './cards/CardsDY'

function App() { 
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      {/*static card with values mentioned already*/}
        <Card/> 

        {/*using PROPS the values for the fields in the card is taken dynamically when calling the component*/}
        <CardsDY live={true} pic='Dhoni.png' name='Dhoni' city='Chennai' role='Data Analyst' skills={['ui ux','java','python','html','css']} />
        <CardsDY live={false} pic='Virat.jpeg' name='Virat' city='Chennai' role='Data Analyst' skills={['ui ux','java','python','html','css']} />
        <CardsDY live={false} pic='rohit2.jpg' name='Rohit' city='Chennai' role='Data Analyst' skills={['ui ux','java','python','html','css']} />
        <CardsDY live={true} pic='shikar.jpeg' name='Shikar' city='Chennai' role='Data Analyst' skills={['ui ux','java','python','html','css']} />
        <CardsDY live={false} pic='jadeja.jpg' name='Jaddu' city='Chennai' role='Data Analyst' skills={['ui ux','java','python','html','css','full-stack','mern']} />


    </div>
    </>
  )
}

export default App
