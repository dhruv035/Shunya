import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useInView
} from "framer-motion";
import useDimensions from "@/components/useDimensions";
const inter = Inter({ subsets: ["latin"] });
import { background, useDisclosure } from "@chakra-ui/react";
import { IconButton, Input, Button, Link, Text } from "@chakra-ui/react";
import Menu from "@/components/menu";
const logoTextClass = "text-[25px] my-2 w-[65vw] text-limeLight font-custom3 ";
const Home = () => {
  const windowDimensions = useDimensions();
  const { scrollY } = useScroll();
  const [tracker, setTracker] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(0);
  const btnRef = React.useRef();
  const [scrolling, setScrolling] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.55 });

  const logoScale = 0.15;
  const logoVariants = {
    initial: { opacity: 0, transition: { duration: 0.5 } },
    base: { opacity: 1, transition: { duration: 0.5 } },
    scrolled: {
      scale: logoScale,
      opacity: 0.6,
      x:
        windowDimensions.height > windowDimensions.width
          ? (-windowDimensions.width * (5 - 4 * logoScale)) / 10 + 32
          : -265,
      y:
        windowDimensions.height > windowDimensions.width
          ? -windowDimensions.height / 6 -
            ((windowDimensions.width * 2) / 5) * (1 - logoScale) +
            20
          : -265,
      transition: { duration: 0.5 },
    },
  };

  const variantsTextLeft = {
    base: { opacity: 0, x: -100, transition: { duration: 1 } },
    scrolled: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const textLeftVariants = {
    initial: { x: "-150%" },
    base: { x: 0 },
    scrolled: { x: "-150%", transition: { duration: 0.6 } },
  };

  const textRightVariants = {
    initial: { x: "+150%" },
    base: { x: 0 },
    scrolled: { x: "+150%", transition: { duration: 0.6 } },
  };

  useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 5000 ms = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!scrolled) setScrolled(true);
    setTracker(latest);
  });
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

  return (
    <main className="flex-col bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <Menu />
        <div className="flex flex-row place-items-center bg-black h-[100vh]">
          <div className=" flex flex-col h-max w-[100vw] items-center self-start overflow-clip bg-black">
            {
              <motion.img
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={"/images/banyan.jpg"}
                style={{
                  marginTop: windowDimensions.width < 700 ? "-150px" : "-160px",
                  opacity: 1,
                  filter: "grayscale(100%) contrast(130%)",
                  left: 0,
                  top: 0,
                  width: ((windowDimensions.height + 80) * 16) / 9,
                  objectFit: "cover",
                  height: windowDimensions.height + 100,
                  zIndex: 10,
                }}
              />
            }
            <motion.img
              initial={{ opacity: 0 }}
              animate={tracker > 0 ? "scrolled" : "base"}
              variants={logoVariants}
              transition={{ duration: 0.5 }}
              className="shunya-logo fixed"
              src={"/images/shunyaLogo.png"}
              style={{
                opacity: 1,
                top:
                  windowDimensions.width > windowDimensions.height
                    ? windowDimensions.width / 6
                    : windowDimensions.height / 6,

                //filter: "hue-rotate(90deg) contrast(160%)",
                height:
                  windowDimensions.width > windowDimensions.height
                    ? (windowDimensions.height * 8) / 10
                    : (windowDimensions.width * 8) / 10,
                width:
                  windowDimensions.width > windowDimensions.height
                    ? (windowDimensions.height * 8) / 10
                    : (windowDimensions.width * 8) / 10,
                zIndex: 100,
              }}
            />
            <div className="flex flex-col -mt-40 z-20 ">
              <motion.div
                initial={tracker > 0 ? "base" : "initial"}
                animate={tracker > 0 ? "scrolled" : "base"}
                variants={textLeftVariants}
                transition={{ duration: 0.5, delay: scrolled ? 0 : 1 }}
                className={logoTextClass + "text-left"}
              >
                ECSTATIC DANCE
              </motion.div>
              <motion.div
                initial={tracker > 0 ? "base" : "initial"}
                animate={tracker > 0 ? "scrolled" : "base"}
                variants={textRightVariants}
                transition={{ duration: 0.5, delay: scrolled ? 0 : 1.2 }}
                className={logoTextClass + "text-right overflow-hidden"}
              >
                WELLNESS RETREAT
              </motion.div>
              <motion.div
                initial={tracker > 0 ? "base" : "initial"}
                animate={tracker > 0 ? "scrolled" : "base"}
                variants={textLeftVariants}
                transition={{ duration: 0.5, delay: scrolled ? 0 : 1.5 }}
                className={logoTextClass}
              >
                ART SPACE
              </motion.div>
            </div>
            <motion.div
              className="flex flex-col w-3/4 "
              ref={ref}
              initial={{ opacity: 1 }}
              animate={isInView ? "scrolled" : "base"}
              variants={variantsTextLeft}
            >
              <Text className="text-greenDark text-left text-[32px] mt-[50px]">
                Shunya Wellness
              </Text>
              <Text className="text-greenLight relative text-[24px] md:text-[30px] mt-6 opacity-50 z-[100]">
                Throughout human history, people have practiced some form of
                dance as a way of altering one’s consciousness and connecting
                with nature, other, and self. The modern day movement of
                ecstatic dance brings us back to these ancient practices, with
                the influence of Gabrielle Roth’s 5Rhythms practice.
              </Text>
            </motion.div>
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
