import Image from "next/image";
import React, {useState, useEffect} from "react";
import { Inter } from "next/font/google";
import { HamburgerIcon } from "@chakra-ui/icons";
import {delay, motion} from "framer-motion"
const inter = Inter({ subsets: ["latin"] });
import { background, useDisclosure } from "@chakra-ui/react";
import { IconButton, Input, Button, Link, Text } from "@chakra-ui/react";
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
  const menuElements=["Home","Ecstatic Dance", "Workshops","Carnival", "Our Team"]
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isLoading, setIsLoading]=useState(true)
  useEffect(()=>{
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 5000 ms = 5 seconds

    return () => clearTimeout(timer);
  },[])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-10 h-screen bg-[#000000] flex items-center justify-center flex-col">
        <div style={{ width: "70%" }}>
        
          <video autoPlay muted loop style={{ opacity:1, width: "100%", height: "100%" }}>
            <source src="./animations/anime.mov" />
          </video>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-col px-1 py-3">
      <motion.img
        initial={{opacity:0.5}}
        animate={{opacity:1}}
        transition={{duration:1}}
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
      transition={{ duration: 3, delay:5.5 }}>
      <IconButton
        className="fixed"
        onClick={onOpen}
        style={{ position: "fixed", background: "transparent" }}
        aria-label="Drawer-Icon"
        icon={<HamburgerIcon boxSize={10} color="#C0D065" />}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        color="#131313"
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#000000" color={"#FCA311"}>
          <DrawerCloseButton />
          <DrawerHeader fontSize={"2xl"} className="font-custom1 font-black">Shunya Wellness</DrawerHeader>

          <DrawerBody>
            <div className="flex flex-col">
              {
                menuElements.map(element=>{
                  return(<Link className="mt-5 font-custom2">{element}</Link>)
                })
              }
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="link" color="golden" className="font-custom1" mr={3} onClick={onClose}>
              Contact Us
            </Button>
            <Button variant="link" color= "golden" className="font-custom1">Book Tickets</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <div className="h-[400px] flex flex-row place-items-center">
        <div className=" mt-10 mx-10 flex flex-col h-max w-full items-center self-start">
          <Text className="text-greenDark text-[30px] font-custom1 self-center">Shunya Wellness</Text>
          {//<Text className="text-greenDark text-[80px] font-custom2">Shunya Wellness</Text>
          }
          <Text className="text-greenDark text-center">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </Text>
          <img 
            src={"/party1.jpeg"}
            style={{
              marginTop:"520px",
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
