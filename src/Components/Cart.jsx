import p1 from '/images/p1.png'
function Cart() {
    return (
        <section className=" bg-[#f2f2f2] ">
          <div className=' max-w-container mx-auto pt-3'>
            <h2 className=' px-3 py-1 bg-black text-white w-[100px]  rounded-md mb-6  '>Computing</h2>
          <div className=' flex flex-wrap gap-y-6 gap-x-5 '>
           <div className=' group bg-white overflow-hidden'>
      <div>
      <img src={p1} alt=""  className='w-full group-hover:scale-105 duration-500 object-cover object-center'/>
      </div>
       <h2 className=' text-center'>AMD Athlon Laptop</h2>
       <p className=' w-[300px] text-[13px] px-3'>HP 15s-eq1578AU AMD Athlon Silver 3050U 8GB 256GB SSD 15.6 Inch FHD Display Silver Laptop</p>
       <p  className=' text-center'>46,500</p>
            </div>
           
            
           </div>
          </div>
        </section>
    )
}

export default Cart
