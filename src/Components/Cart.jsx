import { useEffect, useRef, useState } from 'react'
import p1 from '/images/p1.png'
import data from '../Data'
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../Slices/CartSlices';


function Cart() {
  const [show, setShow] = useState(data)
  const [showCart,setShowCart] =useState(false)
 const dispatch =useDispatch();
  const handleCart = () => {
     setShowCart(true)
  }
  useEffect(()=>{
    const falseHover=(e)=>{
     if(!dropref.current.contains(e.target)){
       setShowCart(false)
 
     }
 
    }
    document.addEventListener("mousedown",falseHover) 
    return()=>{
     document.removeEventListener("mousedown",falseHover)
    } 
   },[])
   const dropref=useRef(null);
   const handleAddCart = (item) =>{
    const {imgs,title,description,price}=item
    dispatch(addtoCart({
    imgs:imgs,
    title:title,
    description:description,
    price:price,
    quantity:1
    }))
   }
  
   const cartData = useSelector(state =>state.cart.cartItem);
   
  return (
    <section className=" bg-[#f2f2f2] ">
      <div className=' max-w-container mx-auto pt-3'>
        <div className=' flex justify-between mb-4'>
          <h2 className=' px-3 py-1 bg-black text-white w-[100px]  rounded-md mb-6  '>Computing</h2>
          <button onClick={handleCart}>
            <MdOutlineShoppingCart size={40} />
          </button>

        </div>
        <div className=' flex flex-wrap  gap-x-10 '>
          {
            show.map((item) => {
              const { id, imgs, title, description, price } = item
              return <div key={id} className='  mb-10 group bg-white overflow-hidden'>
                <div className=' relative'>
                  <img src={imgs} alt="" className='w-full group-hover:scale-110 duration-500 object-cover object-center' />
                  <button onClick={()=>handleAddCart(item)} className='absolute top-10 right-5 px-2 py-2 hidden group-hover:block group  rounded-full bg-gray-300 '>
                    <MdOutlineShoppingCart size={20}/>
                       </button>

                </div>
               <div className=' mt-4'>
               <h2 className=' text-center'>{title}</h2>
                <p className=' w-[300px] text-[13px] px-3'>{description}</p>
                <p className=' text-center '>{price} </p>
               </div>
              </div>
            })
          }


        </div>

       {
        showCart && 
        <div  ref={dropref} className=' bg-white w-96 h-screen absolute top-0 right-0'>
        <div className='flex justify-between  px-3 py-3 bg-gray-400  '>
          <div className=' flex gap-x-3 items-center '>
            <MdOutlineShoppingCart size={20} />
            <h2>Cart</h2>
          </div>
          <button onClick={()=>setShowCart(false)}>
          <IoMdClose  size={30} />
          </button>
        </div>
          {/* mapping desing  */}          
        <div className=' h-[75%] overflow-y-scroll overflow-x-hidden'>
        {
          cartData.map((item,index)=>{
            const {imgs,description,price}= item
          return  <div key={index} className='px-2 my-3'>
            <div  className=' flex gap-x-2  border-b-2 py-2'>
                <div className=' w-[100px]'>
                  <img src={imgs} alt="" className=' w-full' />
                </div>
                  <div className=' w-[60%] '>
                    <p className=' w-full font-medium text-[14px]'>{description}</p>
                    <p className='mt-3 font-medium text-[13px]'>Tk 4548674  *  1</p>
                  </div>
             <button>
             <RiDeleteBin6Line size={20} className='mt-12 text-blue-700 ' />
             </button>
            </div>
          </div>
          })
        } </div>      
        {/* mapping desing  */}
        
      
         <div className='absolute  bottom-3 border-t-2 w-96 text-center'>
          <h2 className='text-xl font-semibold my-3'>Sub Total: Tk 489,300</h2>
         <button className=' bg-black py-1 w-full rounded-sm text-white'>View Cart</button>
         </div>
       
      </div>
       }
      </div>
    </section>
  )
}

export default Cart
