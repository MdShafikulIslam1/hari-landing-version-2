import { HAIR_TIPS } from "../../constances"

export default function HairTips() {
    return (
      <section className="">
        <div className="holder">
          <div className="py-8 px-8 bg-cover bg-no-repeat text-black rounded-xl" style={{ backgroundImage: "url('/health_bg.png')" }}>
            <h3 className="mb-4 text-center text-3xl font-bold">স্বাস্থ্যকর চুলের জন্য তিনটি সহজ উপায়</h3>
            <p className="mb-6 font-bold text-center">সরলতা ও ব্যবহারের স্বাচ্ছন্দ্য চুলের যত্ন নেওয়ার প্রক্রিয়াটিকে আনন্দদায়ক এবং সাশ্রয়ী মূল্যের করে তোলে।</p>
  
  
            <div className="px-8 py-6 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-evenly gap-8">
              {HAIR_TIPS.map((item, index) => (
                <HairTipsCard index={index + 1} text={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function HairTipsCard(props: { index: number, text: string }) {
    return (
      <div className="w-48">
        <div className="mb-4 mx-auto w-14 h-14 grid place-items-center bg-[rgb(122,0,20)] text-3xl text-[rgb(239,209,174)] font-bold rounded-full">{props.index}</div>
        <p className="text-center font-bold">{props.text}</p>
      </div>
    )
  }