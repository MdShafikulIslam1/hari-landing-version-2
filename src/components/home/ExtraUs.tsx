import { EXTRA_US } from "../../constances"
import Image from "next/image"
import { CheckIcon } from "../common"

export default function ExtraUs() {
    return (
      <section className="">
        <div className="holder">
          {/* Top */}
          <div className="flex flex-col md:flex-row gap-8 bg-[rgb(239,209,174)] text-black rounded-xl overflow-hidden">
            <div className="w-full md:w-2/6 h-72 md:h-auto bg-cover md:bg-left bg-no-repeat" style={{ backgroundImage: "url('/effect_img.png')" }}></div>
  
            {/* Text */}
            <div className="md:w-4/6 px-8 py-6 flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-[rgb(224,74,8)]">এর প্রভাব সারা বিশ্ব থেকে শত শত পুরুষ এবং মহিলাদের দ্বারা প্রমাণিত হয়েছে</h3>
              <div className="h-[1px] bg-[rgb(224,74,8)]"></div>

              <p className="text-lg">Hair Surge Shampoo চিকিৎসার সম্পূর্ণ 4-সপ্তাহের কোর্সটি চমকপ্রদ ফলাফল দেয়।</p>
            </div>
          </div>

          {/* Bottom */}
          <div className="px-8 pt-6 pb-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-evenly gap-8 bg-[rgb(36,16,12)] rounded-xl overflow-hidden">
            {EXTRA_US.map(item => (
              <ExtraUsCard {...item} key={item.name} />
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  function ExtraUsCard(props: { name: string, des: string, src: string, points: string[] }) {
    return (
      <div className="w-48">
        <h3 className="h-32 text-xl font-bold text-center">{props.name}</h3>
        <div className="mb-6 w-48 h-48 relative rounded-xl border-4 border-white">
          <div className="w-3/5 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-4 py-2 flex items-center justify-center font-bold bg-white text-black rounded-xl">{props.des}</div>
          <div className="absolute -top-2 left-1/2 -1translate-x-1/2 w-1 h-48 self-center bg-white"></div>

          <Image className="w-full h-full object-contain rounded-md" src={props.src} width={100} height={100} alt={props.name} />
        </div>

        <div className="flex flex-col gap-4">
          {props.points.map(item => (
            <div className="flex items-start gap-2" key={item}>
              <CheckIcon />
              <p className="opacity-75">{item}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }