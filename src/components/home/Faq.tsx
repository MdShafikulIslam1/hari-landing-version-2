import { FAQS } from "../../constances";
import { CheckIcon } from "../common";

export default function Faq() {
    return (
      <section className="">
        <div className="md:px-8 md:py-10 holder bg-no-repeat bg-cover bg-right md:bg-right-top text-black rounded-xl" style={{ backgroundImage: "url('/recomended_img.jpg')" }}>
          <div className="md:w-4/6 px-8 py-10 md:p-0 flex flex-col gap-4 bg-gradient-to-b md:bg-none from-white/50 to-black/50 rounded-xl">
            {FAQS.map(item => (
              <div className="flex items-start gap-2" key={item}>
                <CheckIcon />
                <p className="font-bold">{item}</p>
              </div>
            ))}
          </div>
          <div className="md:w-2/6"></div>
        </div>
      </section>
    )
  }