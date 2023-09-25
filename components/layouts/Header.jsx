"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import Search from "./Search";
import Image from "next/image";
import CartContext from "@/context/CartContext";
import { useSession } from "next-auth/react";
import AuthContext from "@/context/AuthContext";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);

  const { data } = useSession();

  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data]);

  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;

  return (
    <header className="bg-white py-2 border-b">
      <div className="container  max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="flex-shrink-0 mr-5">
            <a href="/">
              <Image
                src="/images/logo.png"
                height="40"
                width="120"
                alt="BuyItNow"
              />
            </a>
          </div>

          <div className=" flex-wrap items-center justify-between hidden lg:flex space-x-2 px-4">
            {/* <Link href="/" className="px-3 py-2 text-center text-gray-400 shadow-sm border border-gray-200 rounded-md block bg-blue-white ">Home</Link> */}
            <Link
              href="/shop"
              className="px-3 py-2  text-center text-gray-400  shadow-sm border border-gray-200 rounded-md block bg-white "
            >
              Boutique
            </Link>
          </div>

          <Search />

          

          <div className="flex items-center space-x-2 ml-auto">
            <Link
              href="/cart"
              className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
            >
              <i className="text-gray-400 w-5 fa fa-shopping-cart"></i>
              <span className="hidden lg:inline ml-1">
                Panier (<b>{cartItems?.length || 0}</b>)
              </span>
            </Link>
            {!user ? (
              <Link
                href="/login"
                className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
              >
                <i className="text-gray-400 w-5 fa fa-user"></i>
                <span className="hidden lg:inline ml-1">Se connecter</span>
              </Link>
            ) : (
              <Link href="/me">
                <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={
                      user?.avatar ? user?.avatar?.url : "/images/default.png"
                    }
                  />
                  <div className="space-y-1 font-medium hidden lg:flex">
                    <p>
                      {user?.name}
                      <time className="block text-sm text-gray-500 dark:text-gray-400">
                        {user?.email}
                      </time>
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </div>

          <div className="lg:hidden  w-full">
            <div className="flex flex-wrap items-center justify-between w-full  space-x-2 px-4">
              {/* <Link href="/" className="px-3 py-2 text-center text-gray-400 shadow-sm border border-gray-200 rounded-md block bg-blue-white ">Home</Link> */}
              <Link
                href="/shop"
                className="px-3 py-2  text-center text-gray-400  shadow-sm border border-gray-200 rounded-md block bg-white w-full "
              >
                Boutique
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
