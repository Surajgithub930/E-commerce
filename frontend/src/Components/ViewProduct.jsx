import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function ViewProduct() {
    let [data, setData] = useState([])
    let { id } = useParams()
    console.log(id)

    useEffect(() => {
        getProductById()
    }, [])

    async function getProductById() {
        let result = await axios.get(`http://localhost:3500/api/getProductById/${id}`)
        console.log(result.data)
        setData(result.data)
    }
    return (
        <>
            <div className='w-screen h-screen flex items-center justify-center'>

                {data.map((data) => (
                    <div className="w-[300px] rounded-md border">
                        <img
                            src="https://media.istockphoto.com/id/1301327357/photo/young-women-using-laptop-at-home.jpg?s=612x612&w=0&k=20&c=V25sQ0A9UssFemuWSiH0g-bsk8RIwx3RcB5u7qMAHjo="
                            alt="Laptop"
                            className="h-[200px] w-full rounded-t-md object-cover"
                        />
                        <div className="p-4">
                            <h1 className="inline-flex items-center text-lg font-semibold">
                                Product Brand:- {data.productBrand}
                            </h1>
                            <h1 className="inline-flex items-center text-lg font-semibold">
                                Product Configuration:- {data.productConfig}
                            </h1>

                            <h1 className="inline-flex items-center text-lg font-semibold">
                                Product Type:- {data.productType}
                            </h1>
                            <h1 className="inline-flex items-center text-lg font-semibold">
                                Product Price:- {data.productPrice}
                            </h1>

                            <h1 className="inline-flex items-center text-lg font-semibold">
                                Product Rating:- {data.productRating}
                            </h1>



                            <Link
                                type="submit"
                                to='/admin'
                            >
                                <button className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Back To Admin Page</button>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}



