import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './Componets/Navber'
import Cards from './Componets/Cards'

function App() {

  const[product,setProduct]=useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((data)=> setProduct(data.recipes));
  },[])

  

  return (
    <>
    <div className='flex flex-wrap justify-between gap-2 container m-auto'>
      {
        product.map((items)=>{
          return(
            <Cards 
            title={items.name}
            imgSrc={items.image}
            rating={items.rating}
            price={items.userId}
            />

          )
        })
      }
    </div>
    </>
  )
}

export default App
