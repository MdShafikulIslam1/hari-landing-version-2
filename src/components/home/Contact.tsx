import Image from "next/image"

export default function Contact() {
    return (
      <section className="">
        <div className="holder px-8 py-6 flex flex-col md:flex-row rounded-xl">
          <div className="w-72 md:h-auto md:w-2/6 mx-auto mb-4 md:mb-0 md:mx-0">
            <Image className="w-3/4 object-contain" src="/bottles-ua.png" width={100} height={100} alt="product" />
          </div>
  
          <div className="md:w-4/6 flex flex-col justify-center">
            <h3 className="mb-4 text-3xl font-bold">আমাদের ম্যানেজার আপনার সাথে যোগাযোগ করবেন</h3>
            <p className="mb-4">চুলের বৃদ্ধির জন্য Hair Surge Shampoo শুধুমাত্র মূল প্যাকেজিংয়ে বিক্রি হয়!</p>
            <p className="mb-4">নকল থেকে সাবধান! শুধুমাত্র আসল Hair Surge Shampoo কিনুন।</p>
          </div>
        </div>
      </section>
    )
  }