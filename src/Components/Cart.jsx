import { useState } from 'react'
import p1 from '/images/p1.png'
import data from '../Data'
import { MdOutlineShoppingCart } from "react-icons/md";
const handleCart = ()=>{
  console.log("cart");
}
function Cart() {
  const [show,setShow] =useState(data)
    return (
        <section className=" bg-[#f2f2f2] ">
          <div className=' max-w-container mx-auto pt-3'>
            <div className=' flex justify-between'>
              <h2 className=' px-3 py-1 bg-black text-white w-[100px]  rounded-md mb-6  '>Computing</h2>
            <button onClick={handleCart}>
            <MdOutlineShoppingCart size={40} />
            </button>
           
            </div>
          <div className=' flex flex-wrap gap-y-6 gap-x-10 '>
          {
            show.map((item)=>{
              const {id,imgs,name,description,price} =item
              return <div key={id} className=' mt-5 mb-10 group bg-white overflow-hidden'>
              <div className=' relative'>
              <img src={imgs} alt=""  className='w-full group-hover:scale-110 duration-500 object-cover object-center'/>
             <div className=' absolute top-10 right-5 px-2 py-2 hidden group-hover:block  rounded-full bg-white '>
             <MdOutlineShoppingCart size={20} />
             </div>
             

              </div>
               <h2 className=' text-center'>{name}</h2>
               <p className=' w-[300px] text-[13px] px-3'>{description}</p>
               <p  className=' text-center'>{price}</p>
                    </div>
            })
          }
           
            
           </div>

           <div className=' bg-black w-96 h-[700px] absolute top-0 right-0'>
            <div className='  flex gap-x-3 px-3 py-3  bg-gray-400 text-center items-center'>
            <MdOutlineShoppingCart size={20} />
            <h2>Cart</h2>
            </div>
           </div>
          </div>
        </section>
    )
}

export default Cart
