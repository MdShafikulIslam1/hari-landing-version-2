import { WHY_US_CARDS } from "../../constances"
import Image from "next/image"

export default function WhyUs() {
    return (
      <section className="">
        <div className="holder">
          {/* Top */}
          <div className="pt-16 pb-6 relative bg-[#e04907] rounded-tl-xl rounded-tr-xl" style={{ backgroundImage: "url('/png-pattern2.png')"}} >
            <div className="bottom-[90%] left-1/2 -translate-x-1/2 md:bottom-28 md:-left-4 md:translate-x-0 absolute h-48 md:h-[20rem]">
              <Image className="w-full h-full object-contain" src="/bottles-ua.png"  width={100} height={200} alt=""/>
            </div>
  
            <h3 className="mb-4 text-2xl font-semibold text-center">স্বাস্থ্যকর ও ঘন চুলকে হ্যাঁ বলুন</h3>

            <div className="px-24 flex flex-col items-center justify-center md:flex-row md:items-start md:justify-evenly gap-4">
              {WHY_US_CARDS.map(item => (
                <WhyUsCard {...item} key={item.text} />
              ))}
            </div>
          </div>
  
          {/* Bottom */}
          <div
            className="pt-6 pb-6 relative bg-cover text-orange-500 rounded-bl-xl rounded-br-xl"
            style={{ backgroundImage: "url('/health_bg.png')" }}          
          >
            <h3 className="mb-4 px-4 text-2xl font-semibold text-center">কীভাবে দ্রুত আপনার চুলের পূর্বের সৌন্দর্য পুনরুদ্ধার করবেন?</h3>

            <div className="px-8 flex flex-col items-center justify-center md:flex-row md:items-start md:justify-evenly">
              <WhyUsCard src="/step1.png" text="4 সপ্তাহের একটি সম্পূর্ণ কোর্স" key={0} />
              <div className="self-center text-6xl font-bold">...</div>
              <WhyUsCard src="/step2.png" text="আপনি সহজেই এই শ্যাম্পুটি পুরো এক মাস ব্যবহার করতে পারেন" key={1} />
              <div className="self-center text-6xl font-bold">...</div>
              <WhyUsCard src="/step3.png" text="ঘন, স্বচ্ছন্দগতির চুলের প্রভাব" key={2} />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function WhyUsCard(props: { src: string, text: string }) {
    return (
      <div className="w-36 px-4 py-2 flex flex-col items-center justify-center gap-2">
        <div className="w-20 h-20 grid">
          <Image className="w-full h-full object-container" src={props.src} width={100} height={100} alt={props.text} />
        </div>
        <p className="max-w-[20ch] text-sm font-bold text-center">{props.text}</p>
      </div>
    )
  }