import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './Componets/Navber'
import Cards from './Componets/Cards'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment  } from './Slices/counterSlice'



function App() {

  // const [product, setProduct] = useState([])

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()





  // useEffect(() => {
  //   fetch('https://dummyjson.com/recipes')
  //     .then(res => res.json())
  //     .then((data) => setProduct(data.recipes));
  // }, [])



  return (
    <>
      {/* <div className='flex flex-wrap justify-between gap-2 container m-auto'>
        {
          product.map((items) => {
            return (
              <Cards
                key={items.id}
                title={items.name}
                imgSrc={items.image}
                rating={items.rating}
                price={items.userId}
              />

            )
          })
        }
      </div> */}

       <div className='container m-auto mt-30'>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch( increment ())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch( decrement ())}
        >
          Decrement
        </button>
        
      </div>
    </div>

    </>
  )
}

export default App
