import React, { useEffect, useState } from 'react'
import Cards from '../Componets/Cards'

const About = () => {

    const[product,setProduct]=useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes/meal-type/snack')
        .then(res => res.json())
        .then((data)=> setProduct(data.recipes));
    },[])

  return (

    <div className='container flex flex-wrap justify-between gap-2 m-auto'>
        {
            product.map((items)=>{
                return(
                    <Cards 

                    imgSrc={items.image}
                    title={items.name}
                    rating={items.rating}
                    price={items.caloriesPerServing}
                    
                    
                    />
                )
            })
        }
    </div>
  )
}

export default About
