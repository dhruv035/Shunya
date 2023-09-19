import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { delay, motion } from "framer-motion";
import useDimensions from "@/components/useDimensions";
const inter = Inter({ subsets: ["latin"] });
import { background, useDisclosure } from "@chakra-ui/react";
import { IconButton, Input, Button, Link, Text } from "@chakra-ui/react";
import Menu from "@/components/menu";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const Home = () => {
  const menuElements = [
    "Home",
    "Ecstatic Dance",
    "Workshops",
    "Carnival",
    "Our Team",
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(0);
  const btnRef = React.useRef();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 5000 ms = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const windowDimensions= useDimensions();
  

  if (isLoading) {
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
  }
  console.log("here", window.innerHeight);

  return (
    <main className="flex-col ">
      <div
        style={{ position: "fixed" }}
        className="-z-[2] flex-col grow-1 px-6 py-10 bg-black w-full h-[100vh]"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <Menu />
        <div className="h-[400px] flex flex-row place-items-center">
          <div className=" mt-10 flex flex-col h-max w-full items-center self-start">
            <Text className="text-greenDark text-[30px] md:text-[80px] font-custom1 self-center mb-40">
              Shunya Wellness
            </Text>
            <motion.img
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={"/images/banyan.jpg"}
              style={{
                marginTop: "100px",
                opacity: 1,
                filter: "grayscale(100%)",
                left: 0,
                top: 0,
                width: "100%",
                height: windowDimensions.height > 700 ? "100vh" : "auto",
                zIndex: -1,
              }}
            />
            {
              //<Text className="text-greenDark text-[80px] font-custom2">Shunya Wellness</Text>
            }
            <Text className="text-greenDark text-left text-[15px] md:text-[30px]"></Text>
          </div>
        </div>
      </motion.div>
    </main>
  );
};
export default Home;
