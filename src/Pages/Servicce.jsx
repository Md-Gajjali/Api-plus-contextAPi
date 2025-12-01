import React, { useEffect, useState } from 'react'
import Cards from '../Componets/Cards'

const Servicce = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes?sortBy=name&order=asc')
            .then(res => res.json())
            .then((data) => setProduct(data.recipes));
    }, [])



    return (
        <>
            <div className='container m-auto'>
                <div className='text-4xl mt-30 mb-0 text-center py-4 px-2 bg-amber-700'>
                    <h1>hello this is mini bazar</h1>
                </div>
            

                <div className='flex flex-wrap  justify-between gap-2 '>

                    {
                        product.map((items) => {
                            return (
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
            </div>
        </>
    )
}

export default Servicce
