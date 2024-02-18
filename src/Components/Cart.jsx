import { useState } from 'react'
import p1 from '/images/p1.png'
import data from '../Data'
import { MdOutlineShoppingCart } from "react-icons/md";

function Cart() {
  const [show,setShow] =useState(data)
    return (
        <section className=" bg-[#f2f2f2] ">
          <div className=' max-w-container mx-auto pt-3'>
            <h2 className=' px-3 py-1 bg-black text-white w-[100px]  rounded-md mb-6  '>Computing</h2>
          <div className=' flex flex-wrap gap-y-6 gap-x-10 '>
          {
            show.map((item)=>{
              const {id,imgs,name,description,price} =item
              return <div key={id} className=' mt-5 mb-10 group bg-white overflow-hidden'>
              <div>
              <img src={imgs} alt=""  className='w-full group-hover:scale-105 duration-500 object-cover object-center'/>
              <MdOutlineShoppingCart />

              </div>
               <h2 className=' text-center'>{name}</h2>
               <p className=' w-[300px] text-[13px] px-3'>{description}</p>
               <p  className=' text-center'>{price}</p>
                    </div>
            })
          }
           
            
           </div>
          </div>
        </section>
    )
}

export default Cart
