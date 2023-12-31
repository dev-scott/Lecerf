import React from "react";
import axios from "axios";

import queryString from "query-string";
import Hero from "@/components/Home/Hero";
import Testimonial from "@/components/Home/Testimonial";
import Informations from "@/components/Home/Informations";

export const metadata = {
  title: "Next.js 13 Ecommerce App",
};

const getProducts = async (searchParams) => {
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    "price[gte]": searchParams.min,
    "price[lte]": searchParams.max,
    "ratings[gte]": searchParams.ratings,
  };

  const searchQuery = queryString.stringify(urlParams);

  const { data } = await axios.get(
    `${process.env.API_URL}/api/products?${searchQuery}`
  );
  return data;
};

const HomePage = async ({ searchParams }) => {

  return(

    <>
  <Hero/>
  <Informations/>
  <Testimonial/>
  
  </>
    ) 
};

export default HomePage;
