import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Product from "./Product"
function Home() {
    const [Hero, setHero] = useState([])
    const HeroPage = () => {
        axios.get('https://api.escuelajs.co/api/v1/products').then((res) => {
            setHero(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        HeroPage()
    }, [])
    return (
        <>
            {
                Hero[0] && (
                    <div className="flex justify-around mt-[100px] mb-[100px] ">
                        <div className="  ">
                            <h1 className="text-green-600 font-bold text-[70px]  ">welcome to our <br /><span className="text-green-400"> store</span></h1>
                            <p className=" text-gray-600 leading-10 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br />
                                Ducimus, animi asperiores. Odit libero earum magnam tenetur <br />
                                rerum, fuga nihil obcaecati ullam consequuntur ad  <br />
                                . Atque unde quae sit maxime vero?
                            </p>
                            <div>
                                <Link to={`/product/ ${Hero.id}`}> <button className=" w-[160px] h-[50px] rounded-[13px] bg-green-900 text-white mt-[20px] "> Shop Now</button></Link>
                               <button className=" w-[160px] h-[50px] rounded-[13px] ml-[30px] border-3 border-green-900 text-green-900  mt-[20px] "> View All </button>

                            </div>
                        </div>
                        <div className="  ">
                            <img className=" w-[500px] h-[500px] rounded-[20px] " src={Hero[1].images} alt="" />
                        </div>
                    </div>

                )
            }

            <div className="grid  grid-cols-3 gap-10 mr-[20px] ml-[20px]">
                <h1 className=" text-green-900 font-bold text-[45px] mt-[40px] ml-[20px]">Whey WE CHOOSE US</h1>

                {

                    Hero.slice(2, 10).map((item) => {
                        return (
                            <>

                                <div className="mb-[30px]">
                                    <div>
                                        <img className=" w[500px] h-[500px] rounded-[20px]" src={item.images} alt="" />
                                       <div className="flex justify-between mt-[10px] ">
                                        <h1 className=" font-bold  "> {item.title} </h1>
                                        <h1 className="text-bold text-2xl text-green-500"> $ {item.price} </h1>

                                        </div>
                                        <p className="line-clamp-2 mt-[8px] ">{item.description} </p>
                                    <button className=" w-[300px] h-[40px] rounded-[13px] bg-green-900 text-white mt-[30px]  ">View</button>
                                    </div>
                                </div>



                            </>

                        )
                    })
                }
            </div>

        </>
    )
}




export default Home
