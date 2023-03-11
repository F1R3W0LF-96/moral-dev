import React, { useState } from "react";
export default function Hero() {
  return (
    <div class="w-full h-screen flex justify-center items-center overflow-hidden relative ">
      {/* <Image
        src={heroImage}
        alt="Hero Image"
        className="opacity-60 object-cover"
        fill
      /> */}
      <div class="flex flex-col justify-center items-center px-3">
        <h1 class=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">
          Experience seamless technology solutions with
          <br />
          <span class="" style={{ color: "#f70037" }}>
            {" "}
            our expert IT services.{" "}
          </span>
        </h1>
        <p class="mt-5 text-center text-lg text-white opacity-90">
          CMS, ERP,Ecommerce, Mobile Apps, Static and Dynamic Websites.
        </p>

        <a
          class=" hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          href="mailto:info@moraldev.com"
          style={{ backgroundColor: "#f70037" }}
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
