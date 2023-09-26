
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
const Home = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home")
    }, 3000); // 5000 ms = 5 seconds

    return () => clearTimeout(timer);
  });
  
    return (
      <div className="fixed inset-0 z-10 h-screen bg-[#000000] flex items-center justify-center flex-col">
        <div style={{ width: "70%" }}>
          <video
            autoPlay
            muted
            loop
            style={{ opacity: 1, width: "100%", height: "100%" }}
          >
            <source src="./animations/anime.mp4" />
          </video>
        </div>
      </div>
    );
};
export default Home;
