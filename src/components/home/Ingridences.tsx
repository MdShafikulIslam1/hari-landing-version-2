import { INGREDENCES } from "../../constances"
import Image from "next/image";
import { CheckIcon } from "../common";

export default function Ingridences() {
    return (
      <section className="">
        <div className="py-10 holder">
          <h3 className="mb-10 mx-auto text-xl text-center">"বিশেষজ্ঞরা হাজার হাজার সংমিশ্রণ নিয়ে গবেষণা করেছেন যা ট্রাইকো - প্রাইম ফর্মুলা ক্যাফেইন, মেন্থল এবং স পালমেটো তৈরি করতে চুলের বৃদ্ধিকে উদ্দীপিত করে। চিকিৎসাগতভাবে প্রমাণিত: Hair Surge Shampoo-এর সক্রিয় উপাদান ব্যবহারের প্রথম কয়েক দিনের মধ্যে কাজ করে:"</h3>
  
          <div className="flex flex-wrap justify-around gap-8">
            {INGREDENCES.map(item => (
              <IngridencesCard {...item} key={item.name} />
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  function IngridencesCard(props: { name: string, img: string, reasons: string[] }) {
    return (
      <div className="max-w-[20rem] w-full sm:w-48">
        <div className="mb-4 mx-auto w-36 h-36">
          <Image className="w-full h-full object-contain" src={props.img} width={100} height={100} alt={props.name}/>
        </div>
        <h4 className="mb-6 mx-auto text-xl font-bold text-center">{props.name}</h4>
  
        <div className="flex flex-col gap-4">
          {props.reasons.map(item => (
            <div className="flex items-start gap-2" key={item}>
              <CheckIcon />
              <p className="text-sm opacity-75">{item}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }