import Image from "next/image";
import { NEW_PRICE, OLD_PRICE } from "../../constances";
import { Clock } from "../common";

export default function Hero() {
    return (
      <section className="mb-36 md:mb-0">
        <div className="pt-10 holder flex flex-col md:flex-row justify-between gap-4">
          {/* Image Section */}
          <div className="flex flex-col items-center md:flex-row md:items-end gap-4">
            <div className="h-[20rem]">
              <Image className="w-full h-full object-container" src="/woman-2.png" width="200" height="250" alt="model" />
            </div>
  
            <div className="w-56 h-56 relative grid place-items-center text-black">
              <Image className="w-full h-full object-contain" src="/logo.png" width={100} height={100} alt="" />
              <div className="absolute font-bold text-xl flex flex-col items-center justify-center">
                <span className="">চুলের যত্নের</span>
                <span className="">সেরা পণ্য</span> 
              </div>             
            </div>
          </div>
  
          {/* Text Section */}
          <div className="py-4 flex flex-col items-center justify-center">
            <del className="mb-4 block text-center font-semibold">পুরাতন মূল্য {OLD_PRICE}</del>               
  
            {/* Card Rate */}
            <div className="ml-6 w-42 h-28 relative grid place-items-center text-black">
              <Image className="w-full h-full object-contain" src="/new_price_bg.png" width={100} height={100} alt=""/>

              <span className="block pr-4 pb-6 absolute text-3xl font-bold">{NEW_PRICE}</span>
            </div>
  
            <h3 className="mb-4 text-xl font-semibold text-center">অফারে 5টি প্যাক স্টকের বাকি আছে</h3>
            <span className="mb-4 block text-sm">অফারটি শেষ হবে</span>
  
            <Clock />
  
            <a className="mt-4 px-8 py-4 text-3xl btn" href="#order-now-section">অর্ডার করুন</a>
          </div>
        </div>
      </section>
    )
  }