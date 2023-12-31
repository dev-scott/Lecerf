"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [keyword, setKeyword] = useState("");

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword) {
      router.push(`/shop?keyword=${keyword}`);
    } else {
      router.push("/shop");
    }
  };

  return (
    <form
      className="flex  items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4 flex-wrap "
      onSubmit={submitHandler}
    >
      <input
        className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
        type="text"
        placeholder="Rechercher un produit"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        required
      />
      <button
        type="button"
        className="px-4 mt-4 sm:mt-0 py-2 inline-block text-white border border-transparent bg-blue-600 text-white rounded-md hover:bg-blue-700"
        onClick={submitHandler}
      >
        Rechercher
      </button>
    </form>
  );
};

export default Search;
