import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { delay, motion } from "framer-motion";
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
  const btnRef = React.useRef();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 5000 ms = 5 seconds

    return () => clearTimeout(timer);
  }, []);

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
            <source src="./animations/anime.mov" />
          </video>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-col px-1 py-3">
      <motion.img
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        src={"/banyan.jpg"}
        style={{
          opacity: 1,
          filter: "grayscale(100%)",
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <Menu />
        <div className="h-[400px] flex flex-row place-items-center">
          <div className=" mt-10 mx-10 flex flex-col h-max w-full items-center self-start">
            <Text className="text-greenDark text-[30px] md:text-[80px] font-custom1 self-center">
              Shunya Wellness
            </Text>
            {
              //<Text className="text-greenDark text-[80px] font-custom2">Shunya Wellness</Text>
            }
            <Text className="text-greenDark text-left text-[15px] md:text-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
              metus pharetra, pulvinar ante in, luctus urna. Phasellus faucibus
              cursus libero, a finibus est viverra vel. Integer ex mauris,
              feugiat nec gravida eget, porttitor id nunc. Duis consequat nibh
              ut lacus semper vulputate. Donec aliquet nisi porta metus viverra,
              id malesuada urna imperdiet. Quisque tortor tellus, dictum sed
              ligula id, tempus vehicula lorem. Vestibulum egestas imperdiet
              nibh, ac iaculis orci efficitur sit amet. <br/><br/>Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Quisque malesuada cursus lacus non rhoncus. Vestibulum
              malesuada mi nisi, a egestas lorem vestibulum at. Sed suscipit
              tincidunt elit, non laoreet justo fringilla sed. Sed cursus justo
              quis tincidunt fringilla. Etiam porttitor faucibus aliquam. Ut
              quis dui tempor, varius purus lobortis, vehicula dui. Mauris eu
              vestibulum tellus, id consequat lorem.
            </Text>
            <img
              src={"/party1.jpeg"}
              style={{
                marginTop: "520px",
                filter: "grayscale(20%)",
                left: 0,
                top: 0,
                width: "100%",
                height: " auto",
              }}
            />
          </div>
        </div>
      </motion.div>
    </main>
  );
};
export default Home;
