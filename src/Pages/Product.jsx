import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { Link } from "react-router-dom"

function Product(){
        const [product, setProduct] = useState([])

    const getProduct = () => {
    axios.get('https://api.escuelajs.co/api/v1/products').then((res) => {
        setProduct(res.data)
    }).catch((err) =>{
        console.log(err)
    })
    }

 useEffect(() => {
    getProduct();
}, [])

    return<>

    <div className="grid grid-cols-3 mt-2 ml-15">
    {product.map((item) => {
        return<>
        <div className="w-[330px] h-[405px] bg-white shadow-xl rounded-[10px] mt-5 ">
        <img className="w-[330px] h-[300px] rounded-t-[10px]" src={item.images} alt="" />
        <h1 className=" font-semibold ml-2">{item.slug}</h1>
        <div className="flex gap-35 mt-2">
        <p className="text-blue-500 text-2xl font-bold ml-2"> ${item.price}.00 </p>
        <button className="w-[60px] h-[40px] bg-blue-500 rounded-[10px] text-white"><Link to={`/View/${item.id}`} >View</Link></button>
        </div>
        </div>
        </>
    })}
    </div>
    
    </>
}

export default Product