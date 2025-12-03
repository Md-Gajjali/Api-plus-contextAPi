import React, { useEffect, useState } from 'react'
import Cards from '../Componets/Cards'
import { useContext } from 'react';
import { AppProvider } from '../ContextApi';





const Contact = () => {
    const [product, setProduct] = useState([])

    const {apon, setApon} = useContext(AppProvider)

    

    useEffect(() => {

      fetch('https://dummyjson.com/products/category/kitchen-accessories')
        .then(res => res.json())
        .then((data)=> setProduct(data.products));
    }, [])

    
return (
    <div className='container m-auto flex flex-wrap justify-between gap-2'>
        <div className='absolute top-20 left-20'>
            <h1>{apon}</h1>
            <button onClick={()=> setApon("this is ......")}>click</button>
        </div>
        {
            product.map((items)=>{
                return(
                    <Cards  
                        imgSrc={items.thumbnail}
                        title={items.title}
                        rating={items.rating}
                        price={items.price}
                    />
                )
            })
        }
    </div>
)
}

export default Contact
