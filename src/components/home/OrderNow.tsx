import { NEW_PRICE } from "../../constances";
import { Clock } from "../common";
import { InputWrapper } from "../ui/Input";

export default function OrderNow() {
    return (
      <section className="" id="order-now-section">
        <div className="holder flex flex-col md:flex-row  bg-no-repeat bg-cover bg-right bg-[rgb(36,16,12)] text-white rounded-xl border-2 border-white" style={{ backgroundImage: "url('/form_bg.png')" }}>
          <div className="md:w-4/5 px-8 py-6 ">
            <div className="mb-8">
              <h3 className="mb-6 text-2xl text-center md:text-left font-bold">অর্ডার করুন এবং একটি উপহার পান</h3>
              
              <div className="px-4 md:px-0 flex flex-col md:flex-row md:items-start gap-8">
                {/* FORM */}
                <form className="md:w-3/5 flex flex-col gap-4">
                  <InputWrapper icon="/form-1.png">
                    <select className="w-full bg-transparent outline-none text-inherit">
                      <option value="bd">বাংলাদেশ</option>
                      <option value="in">India</option>
                    </select>
                  </InputWrapper>
                  <InputWrapper icon="/form-2.png">
                    <input className="w-full bg-transparent outline-none text-inherit" placeholder="নাম" />
                  </InputWrapper>
                  <InputWrapper icon="/form-3.png">
                    <input className="w-full bg-transparent outline-none text-inherit" placeholder="ফোন নম্বর" />
                  </InputWrapper>
    
                  <div className="">
                    <span className="font-bold text-sm">মূল্য: {NEW_PRICE}</span>
                  </div> 
    
                  <button className="w-full px-4 py-2 btn">অর্ডার করুন</button>          
                </form>
    
                {/* TIMER */}
                <div className="md:w-2/5 flex flex-col items-center md:items-start gap-4">
                  <Clock variant="two" />
                  <span className="text-sm">অফারটি শেষ হবে</span>
                  <h3 className="text-xl text-center md:text-left font-bold">Hair Surge Shampoo চুল বৃদ্ধির জন্য</h3>
                  <p className="text-sm text-center md:text-left">চুলের যত্ন নেওয়ার জন্য Maxi-Growth কমপ্লেক্সের সাহায্যে তাৎক্ষণিকভাবে চুলের গঠন পুনরুদ্ধার করার জন্য একটি এক্সপ্রেস ট্রিটমেন্ট এবং লোমকূপ উদ্দীপনা!</p>
                </div>
              </div>
            </div>
    
            <div className="px-4 md:px-0">
              <p className="text-sm">পণ্যটি প্রত্যয়িত, উপাদানের তালিকা, নির্দেশাবলী এবং ব্যবহারের জন্য ইঙ্গিতগুলি লেবেলে তালিকাভুক্ত করা হয়েছে। পেমেন্ট প্রাপ্তির পরে (ক্যাশ অন ডেলিভারি)।</p>
            </div>
          </div>
        </div>
      </section>
    )
  }