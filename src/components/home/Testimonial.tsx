"use client";
import Image from "next/image";

import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { ITestimonial, TESTIMONIALS } from "../../constances";

export default function Testimonial() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((pre) => (pre < 2 ? pre + 1 : 0));
  };
  const handlePrevious = () => {
    setActiveSlide((pre) => (pre > 0 ? pre - 1 : 2));
  };

  return (
    <section className="">
      <div className="holder ">
        <div className="w-full bg-white rounded-xl overflow-x-hidden">
          <div
            className="grid grid-cols-[repeat(3,100%)] transition-all duration-500"
            style={{ transform: `translateX(calc(-${activeSlide} * 100%))` }}
          >
            {TESTIMONIALS.map((item) => (
              <Slide {...item} key={item.name} />
            ))}
          </div>
          <div className="px-4 md:px-8 py-2 flex items-center justify-center gap-4">
            <button
              className="h-8 aspect-square grid place-items-center bg-red-500 rounded-xl hover:bg-red-700"
              onClick={handlePrevious}
            >
              <BiLeftArrow />
            </button>
            <button
              className="h-8 aspect-square grid place-items-center bg-red-500 rounded-xl hover:bg-red-700"
              onClick={handleNext}
            >
              <BiRightArrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slide(props: ITestimonial) {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white text-black rounded-xl">
      <div className="md:w-2/6 pt-4 md:flex-grow flex items-end justify-center">
        <Image
          className="w-[40%] md:w-[70%] object-cover"
          src={props.img}
          width={200}
          height={400}
          alt={props.name}
        />
      </div>

      <div className="md:w-4/6 relative px-16 md:px-8 py-8">
        <Image
          className="w-8 h-8 md:w-16 md:h-16 absolute top-8 left-4 md:left-0 md:-translate-x-full object-contain"
          src="/arrows_top.png"
          width={200}
          height={400}
          alt=""
        />
        <Image
          className="w-8 h-8 md:w-16 md:h-16 absolute bottom-8 right-4 md:right-0 md:-translate-x-full object-contain"
          src="/arrows_bottom.png"
          width={200}
          height={400}
          alt=""
        />

        <p className="mb-6">{props.text}</p>

        <h3 className="pr-6 text-xl italic text-blue-500 font-bold">
          {props.name}
        </h3>
      </div>
    </div>
  );
}
