import React, { useContext, useEffect, useState } from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react'
import axios from 'axios'
import UserContext from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    let navigation=useNavigate()
    let [data, setData] = useState([])
    let [inp, setInp] = useState('')
    // console.log(inp)
    let {login}=useContext(UserContext)

    useEffect(() => {
        getProductData()
    }, [])

    async function getProductData() {
        let result = await axios.get('http://localhost:3500/api/getProduct')
        console.log(result.data)
        setData(result.data)
    }


    async function cartSave(data) {
     if(login){
           // console.log(data)
           let result = await axios.post(`http://localhost:3500/api/cartSave/${login}`, {
            productBrand: data.productBrand,
            productConfig: data.productConfig,
            productType: data.productType,
            productPrice: data.productPrice,
            productRating: data.productRating,
            image:data.image
        })

        if (result.data == true) {
            getCartData()
            alert("product saved into cart !")
        }
        // console.log(true)
     }else{
        navigation('/clientLogin')
     }
    }

    ///Letter Write to search///

    async function handleSearch() {
        let result = await axios.get(`http://localhost:3500/api/searchProduct/${inp}`)
        setData(result.data)
    }


    useEffect(() => {
        handleSearch()
        if (inp == '') {
            getProductData()
        }
    }, [inp])

    ///Product search///

    async function Apple() {
        let result = await axios.get('http://localhost:3500/api/getProduct')
        let final = result.data.filter((item) => item.productBrand == 'Apple')
        setData(final)
    }

    async function HP() {
        let result = await axios.get('http://localhost:3500/api/getProduct')
        let final = result.data.filter((item) => item.productBrand == 'HP')
        setData(final)
    }

    async function Dell() {
        let result = await axios.get('http://localhost:3500/api/getProduct')
        let final = result.data.filter((item) => item.productBrand == 'Dell')
        setData(final)
    }

    async function Lenovo() {
        let result = await axios.get('http://localhost:3500/api/getProduct')
        let final = result.data.filter((item) => item.productBrand == 'Lenovo')
        setData(final)
    }

    async function Sony() {
        let result = await axios.get('http://localhost:3500/api/getProduct')
        let final = result.data.filter((item) => item.productBrand == 'Sony')
        setData(final)
    }

    /////Cart Length//////
    let { setCount } = useContext(UserContext)

    useEffect(() => {
        getCartData()
    }, [])

    async function getCartData() {
        let result = await axios.get(`http://localhost:3500/api/getCart/${login}`)

        // console.log(result.data.length)
        setCount(result.data.length)


    }
    return (
        <>
            <aside className="flex fixed h-screen w-64 flex-col overflow-y-auto border-r bg-blue-100 px-5 py-8">

                <div className="mt-6 flex flex-1 flex-col justify-between">
                    <nav className="-mx-3 space-y-6 ">
                        <div className="space-y-3 ">
                            <label className="px-3 text-xs font-semibold uppercase text-gray-900 text-[15px]">Search</label>


                            {/* Search Bar Tailwind Code*/}
                            <form class="flex items-center max-w-sm mx-auto" >
                                <label for="simple-search" class="sr-only">Search</label>
                                <div class="relative w-full">

                                    <input type="search" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Product Type..." required onChange={(e)=> setInp(e.target.value)}/>

                                </div>
                                <button onClick={handleSearch} type="button" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                    <span class="sr-only">Search</span>
                                </button>
                            </form>




                        </div>
                        <div className="space-y-3 ">
                            <label className="px-3 text-xs font-semibold uppercase text-gray-900 ">Brand</label>
                            <button
                                onClick={getProductData}
                                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                                href="#"
                            >

                                <span className="mx-2 text-sm font-medium">All</span>
                            </button>
                            <button
                                onClick={Apple}
                                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                                href="#"
                            >

                                <span className="mx-2 text-sm font-medium">Apple</span>
                            </button>
                            <button
                                onClick={HP}
                                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                                href="#"
                            >

                                <span className="mx-2 text-sm font-medium">HP</span>
                            </button>
                            <button
                                onClick={Dell}
                                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                                href="#"
                            >

                                <span className="mx-2 text-sm font-medium">Dell</span>
                            </button>
                            <button
                                onClick={Lenovo}
                                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                                href="#"
                            >

                                <span className="mx-2 text-sm font-medium">Lenovo</span>
                            </button>
                            <button
                                onClick={Sony}
                                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                                href="#"
                            >

                                <span className="mx-2 text-sm font-medium">Sony</span>
                            </button>
                        </div>

                        <div className="space-y-3 ">
                            <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                                Customization
                            </label>
                            <a
                                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                                href="#"
                            >
                                <Brush className="h-5 w-5" aria-hidden="true" />
                                <span className="mx-2 text-sm font-medium">Themes</span>
                            </a>
                            <a
                                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                                href="#"
                            >
                                <Wrench className="h-5 w-5" aria-hidden="true" />
                                <span className="mx-2 text-sm font-medium">Setting</span>
                            </a>
                        </div>
                    </nav>
                </div>
            </aside>

            {/* Card Section Start*/}

            <div className='ml-[300px] flex justify-between w-[1000px] flex-wrap gap-[20px]'>
                {data.map((data) => (
                    <div class="w-[300px] rounded-md border">
                        <img
                            
                            src={`http://localhost:3500/${data.image}`}
                            alt="Laptop"
                            class="h-[200px] w-full rounded-t-md object-cover"
                        />
                        <div className="p-4 bg-gray-100">
                            <h1 class="inline-flex items-center text-lg font-semibold">
                                Product Brand: {data.productBrand}
                            </h1>
                            <h1 class="inline-flex items-center text-lg font-semibold">
                                Product Configuration: {data.productConfig}
                            </h1>
                            <h1 class="inline-flex items-center text-lg font-semibold">
                                Product Type: {data.productType}
                            </h1>
                            <h1 class="inline-flex items-center text-lg font-semibold">
                                Product Price: {data.productPrice}
                            </h1>
                            <h1 class="inline-flex items-center text-lg font-semibold">
                                Product Rating: {data.productRating}
                            </h1>


                            <button
                                type="button"
                                onClick={() => cartSave(data)}
                                className="mt-4 w-full rounded-sm bg-blue-400 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}
