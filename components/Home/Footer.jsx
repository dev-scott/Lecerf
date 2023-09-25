import React from "react";

const Footer = () => {
  return (
    <footer className='wow fadeInUp relative z-10 bg-white py-0 lg:pt-[0px] data-wow-delay=".15S" '>
 
      <div className="mt-12 border-t border-opacity-40 py-8 lg:mt-[60px]">
        <div className="container max-w-screen-2xl px-4  mx-auto">
          <div className="flex flex-wrap">
            <div className=" w-full px-4 md:w-2/3 lg:w-1/2">
              <div class="my-1">
                <div class="-mx-3  items-center justify-center md:justify-start hidden lg:flex">
                  <a
                    href="javascript:void(0)"
                    class="px-3 text-base  hover:text-primary"
                  >
                    Privacy policy
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="px-3 text-base  hover:text-primary"
                  >
                    Legal notice
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="px-3 text-base  hover:text-primary"
                  >
                    Terms of service
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/3 lg:w-1/2">
              <div class="my-1 flex justify-center md:justify-end">
                <p class="text-base ">
                  Designed and Developed by
                  <a
                    href=""
                    rel="nofollow noopner"
                    target="_blank"
                    class="text-blue-600 hover:underline ml-2"
                  >
                    Dev . Scott
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
