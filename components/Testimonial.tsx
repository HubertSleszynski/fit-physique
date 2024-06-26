"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonialData = [
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message:
      "I love the community feel at this gym. The trainers and fellow members make every workout enjoyable and rewarding.",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message:
      "The atmosphere here is motivating and energizing. I've gained so much confidence and strength since I started training at this gym.",
    name: "Michael Smith",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message:
      "The trainers here truly care about your progress and well-being. Every session is challenging yet fun, and I always leave feeling accomplished.",
    name: "Maria Garcia",
  },
  {
    img: "/assets/img/testimonial/casie.jpg",
    message:
      "The workout programs are diverse and effective, catering to all fitness levels. I've seen amazing progress in my endurance and overall health.",
    name: "Casie Novak",
  },
  {
    img: "/assets/img/testimonial/yan.jpg",
    message:
      "The variety of equipment and classes here is fantastic. I've never felt more supported and encouraged on my fitness journey.",
    name: "Yan Dubrovsky",
  },
  {
    img: "/assets/img/testimonial/alex.jpg",
    message:
      "The trainers push you to be your best while creating a welcoming and friendly environment.",
    name: "Alex Cavil",
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const Testimonial = () => {
  return (
    <section className="py-12 xl:py-28" id="testimonial">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="h2 text-center"
        >
          Our Testimonials
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            loop
            className="h-[320px]"
          >
            {testimonialData.map((person, index) => {
              return (
                <SwiperSlide className="h-full" key={index}>
                  <div className="flex flex-col justify-center items-center gap-6 text-center h-full">
                    <Image
                      src={person.img}
                      width={90}
                      height={90}
                      alt=""
                      className="rounded-full border-2 border-accent"
                    />
                    <div className="flex flex-col justify-center items-center">
                      <FaQuoteLeft className="text-2xl text-gray-300" />
                      <p className="max-h-[380px] mb-4">{person.message}</p>
                      <span className="text-2xl text-accent">
                        {person.name}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
