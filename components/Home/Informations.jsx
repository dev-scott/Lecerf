"use client"

import { fadeIn, staggerContainer } from '@/helpers/motion'

import React from 'react'
import { motion } from 'framer-motion';


const Informations = () => {
  return (
    
    <motion.div
    
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}

    id="about"
    className=" bg-[#f3f4ff]  py-20 lg:pt-[120px] lg:pb-[40px]  " 
  >
    <div className="container max-w-screen-2xl px-4 mx-auto ">
      <div class=" flex flex-wrap">
        <motion.div
        
        variants={fadeIn('right', 'tween', 0.2, 1)}


        class="w-full">
          <div class="mb-12 lg:mb-20">
            <span class="mb-2 block text-lg font-semibold text-primary text-black ">
              A propos de nous
            </span>
            <h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px] text-black">
              Quelles sont nos service et notre vision
            </h2>
            <p class="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed text-black">
              Chez lecerf . vous commander votre produit de facon simple avec une livraison rapide et securise
            </p>
          </div>
        </motion.div>
      </div>

      <div class="-mx-4 flex flex-wrap">
        <motion.div
        
        variants={fadeIn('up', 'spring', 1 * 0.5, 1)}

        
        class="w-full px-4 md:w-1/2 lg:w-1/4">
          <div class="wow fadeInUp group mb-12 " data-wow-delay=".1s">
            <div class="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl ">
              <span class="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-opacity-20 duration-300 group-hover:rotate-45"></span>
            <img src="/images/productivite.png" className=" w-full h-full object-contain" alt="" />
            </div>
            <h4 class="mb-3 text-xl font-bold text-dark text-black">
              Temps de livraison
            </h4>
            <p class="mb-8 text-body-color lg:mb-11 text-black">
              Nous livrons le produit dans les 24 prochaine heures apres avoir recu la commande
            </p>
            <a
              href="/shop"
              class="text-base font-medium text-body-color hover:text-primary text-black"
            >
              La boutique
            </a>
          </div>
        </motion.div>
        <motion.div
        
        variants={fadeIn('up', 'spring', 2 * 0.5, 1)}


         class="w-full px-4 md:w-1/2 lg:w-1/4">
          <div
            class="wow fadeInUp group mb-12 "
            data-wow-delay=".15s"
          >
            <div class="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl ">
              <span class="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
              <img src="/images/processus.png" className=" w-full h-full object-contain" alt="" />
            </div>
            <h4 class="mb-3 text-xl font-bold text-dark text-black">
              Nos produits
            </h4>
            <p class="mb-8 text-body-color lg:mb-11 text-black">
              Nous avons des produits varies . Chemise de soire , pagne , etc ...
            </p>
            <a
              href="/shopp"
              class="text-base font-medium text-body-color hover:text-primary text-black"
            >
              La boutique
            </a>
          </div>
        </motion.div>
        <motion.div
        
        variants={fadeIn('up', 'spring', 3 * 0.5, 1)}

        
        class="w-full px-4 md:w-1/2 lg:w-1/4">
          <div class="wow fadeInUp group mb-12 " data-wow-delay=".2s">
            <div class="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl ">
              <span class="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
              <img src="/images/localisation.png" className=" w-full h-full object-contain" alt="" />

            </div>
            <h4 class="mb-3 text-xl font-bold text-dark text-black">
              Le cerf en physique
            </h4>
            <p class="mb-8 text-body-color lg:mb-11 text-black">
              La boutique lecerf est situer a akwa entre sud
            </p>
            <a
              href="/shop"
              class="text-base font-medium text-body-color hover:text-primary text-black"
            >
              La boutique
            </a>
          </div>
        </motion.div>
        <motion.div
        
        variants={fadeIn('up', 'spring', 4 * 0.5, 1)}

        
        class="w-full px-4 md:w-1/2 lg:w-1/4">
          <div
            class="wow fadeInUp group mb-12 "
            data-wow-delay=".25s"
          >
            <div class="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl ">
              <span class="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
              <img src="/images/productivite.png" className=" w-full h-full object-contain" alt="" />

            </div>
            <h4 class="mb-3 text-xl font-bold text-dark text-black">
              Votre champs d'action
            </h4>
            <p class="mb-8 text-body-color lg:mb-11 text-black">
              Lecerf est disponible sur tout le territoir camerounais
            </p>
            <a
              href="/shop"
              class="text-base font-medium text-body-color hover:text-primary text-black"
            >
              La boutique
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>


  )
}

export default Informations