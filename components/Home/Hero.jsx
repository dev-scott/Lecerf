"use client"

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/helpers/motion";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-white to-blue-50 pt-2  ">
      <motion.div
      
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      
      className="container  max-w-screen-2xl mx-auto px-4  max-h-[600px] h-[600px]  flex flex-wrap items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ one: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex-1  h-full py-4 flex flex-col justify-center space-y-5"
        >
          <p>Nous avons de nouvelles collections pour vous 🔥</p>
          <h1 className="w-full text-5xl font-bold leading-tight ">
            Les meilleur produits <br /> a votre dispositions <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-pink-500 to-purple-500">
              Lecerf
            </span>
          </h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
            impedit aspernatur iste necessitatibus adipisci facere recusandae
            modi alias accusamus doloribus labore. Adipisci, vero?
          </span>

          <div className="flex justify-start space-x-4">
            <buton className="text-white cursor-pointer bg-blue-600 rounded-md px-4 py-3 text-center">
              Nos produits
            </buton>
            <buton className="text-gray-400 border-2 border-gray-600  rounded-md px-4 py-3 text-center">
              Contact us
            </buton>
          </div>
          <div className="flex space-x-2 ">
            <div className="">
              <h2 className="font-bold text-2xl leading-tight">20k+</h2>
              <span className="text-[10px] font-semibold">Produits</span>
            </div>
            <div>
              <h2 className="font-bold text-2xl leading-tight">20k+</h2>
              <span className="text-[10px] font-semibold">clients</span>
            </div>
          </div>
        </motion.div>
        <div className=" hidden flex-1  h-full relative lg:flex  ">
          <span class="absolute bottom-0 right-0 z-[-1]">
            <img src="shape-3.svg" alt="" />
          </span>
          {/* <span className="absolute top-3 -left-3">
            <img src="/images/Arrow.png" alt="" />
          </span> */}
          {/* <span className="absolute top-3 -right-3">
            <img src="/images/Sparkles.png" alt="" />
          </span> */}
          <motion.img
                  variants={fadeIn('up', 'tween', 0.3, 1)}

            src="/images/heroImg.png"
            alt="img hero"
            className=" w-full h-full object-cover"
          />
          <img
            src="/images/heroImg.jpg"
            alt="img hero"
            className="  h-[100px] object-contain absolute -left-7 -bottom-7  transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6  "
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
