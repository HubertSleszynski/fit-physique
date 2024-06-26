"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const HeroSlider = () => {
  return (
    <Swiper className="h-full" loop>
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48 xl:pt-72">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="h1 text-center lg:text-left mb-2"
            >
              <span className="text-accent">Where hard</span> work meets success
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="text-white italic text-center lg:text-left mb-4"
            >
              Are you prepared to make every workout a step towards greatness?
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
            >
              <CustomButton
                text="Get started"
                containerStyles="w-[196px] h-[62px]"
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="h1 text-center lg:text-left mb-2"
            >
              <span className="text-accent">Stronger </span> Than Yesterday
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="text-white italic text-center lg:text-left mb-4"
            >
              How much can you achieve with dedication and hard work?
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
            >
              <CustomButton
                text="Get started"
                containerStyles="w-[196px] h-[62px]"
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="h1 text-center lg:text-left mb-2"
            >
              <span className="text-accent">Fitness </span> Fueled by
              Determination
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="text-white italic text-center lg:text-left mb-4"
            >
              Achieve the impossible, one rep at a time.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
            >
              <CustomButton
                text="Get started"
                containerStyles="w-[196px] h-[62px]"
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperNavButtons
        containerStyles="absolute bottom-0 lg:bottom-0 right-0 h-[130px] w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-1"
        btnStyles="border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
        iconStyles="text-2xl"
      />
    </Swiper>
  );
};

export default HeroSlider;
