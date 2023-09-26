import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useInView,
} from "framer-motion";
import useDimensions from "@/components/useDimensions";
import { Text } from "@chakra-ui/react";
import Menu from "@/components/menu";
const logoTextClass = "text-[25px] my-2 w-[65vw] text-limeLight font-custom3 ";
const Home = () => {
  const dimensions = useDimensions();
  const [windowDimensions, setWindowDimensions] = useState(dimensions);
  console.log("height", windowDimensions.height);
  const { scrollY } = useScroll();
  const [tracker, setTracker] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { amount: 0.3 });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { amount: 0.3 });
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { amount: 0.3 });
  const ref5 = useRef(null);
  const isInView5 = useInView(ref5, { amount: 0.3 });

  const bg1Variants = {
    base: { opacity: 0, x: -70, transition: { duration: 1 } },
    scrolled: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  useEffect(() => {
    if (Math.abs(dimensions.height - windowDimensions.height) > 100)
      setWindowDimensions(dimensions);
  }, [dimensions]);

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
    base: { opacity: 0, x: -70, transition: { duration: 1 } },
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
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!scrolled) setScrolled(true);
    if (latest > 0 && tracker === false) setTracker(true);
    else if (latest === 0 && tracker === true) setTracker(false);
    console.log(isInView2);
  });
  return (
    <main className="flex-col bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <Menu />
        <div className="flex flex-row place-items-center bg-black ">
          <div className=" flex flex-col  w-[100vw] items-center self-start overflow-clip bg-black">
            {
              <motion.img
                ref={ref}
                initial={{ opacity: 1 }}
                animate={!isInView ? "base" : "scrolled"}
                variants={bg1Variants}
                transition={{ duration: 0.5 }}
                src={"/images/banyan.jpg"}
                style={{
                  opacity: 1,
                  filter: " contrast(120%)",
                  left: 0,
                  top: 0,
                  objectFit: "cover",
                  height:
                    windowDimensions.width < 700
                      ? "835px"
                      : windowDimensions.height + 100,
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
            <div
              style={{
                top:
                  windowDimensions.width > windowDimensions.height
                    ? windowDimensions.width / 6
                    : windowDimensions.height *7/10,
              }}
              className="flex flex-col fixed z-20 "
            >
              <motion.div
                initial={tracker ? "base" : "initial"}
                animate={tracker ? "scrolled" : "base"}
                variants={textLeftVariants}
                transition={{ duration: 0.5, delay: scrolled ? 0 : 1 }}
                className={logoTextClass + "text-left"}
              >
                ECSTATIC DANCE
              </motion.div>
              <motion.div
                initial={tracker ? "base" : "initial"}
                animate={tracker ? "scrolled" : "base"}
                variants={textRightVariants}
                transition={{ duration: 0.5, delay: scrolled ? 0 : 1.2 }}
                className={logoTextClass + "text-right overflow-hidden"}
              >
                WELLNESS RETREAT
              </motion.div>
              <motion.div
                initial={tracker ? "base" : "initial"}
                animate={tracker ? "scrolled" : "base"}
                variants={textLeftVariants}
                transition={{ duration: 0.5, delay: scrolled ? 0 : 1.5 }}
                className={logoTextClass}
              >
                ART SPACE
              </motion.div>
            </div>

            <motion.div
              ref={ref2}
              initial={{ opacity: 1 }}
              animate={isInView2 && !isInView ? "scrolled" : "base"}
              variants={variantsTextLeft}
              className="flex flex-col self-start"
            >
              <div className="flex">
                <img
                  src={"/images/shunya-wellness-home.jpg"}
                  style={{
                    opacity: 1,
                    filter: "contrast(110%) brightness(40%)",
                    left: 0,
                    top: 0,
                    objectFit: "cover",
                    height: "835px",
                    zIndex: 20,
                  }}
                />
              </div>
              <div className="self-center w-5/6 justify-center -mt-[835px] h-[835px] z-[100]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    isInView2
                      ? {
                          opacity: 0.7,
                          transition: { duration: 0.3, delay: 0.3 },
                        }
                      : { opacity: 0 }
                  }
                  className="text-gold2 text-center relative font-custom3 mt-[30px] text-[70px] z-[100] "
                >
                  Shunya Wellness
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    isInView2
                      ? {
                          opacity: 0.7,
                          transition: { duration: 0.3, delay: 0.6 },
                        }
                      : { opacity: 0 }
                  }
                 
                  className="text-limeDark text-[6.8vw] relative opacity-70 z-[100]"
                >
                  Every season from November till April,
                  <i className="text-gold2 font-custom2 font-black">
                    Shunya Wellness{" "}
                  </i>
                  becomes the place of destination of nomads, travellers,
                  musicians and dancers from all over the World. The venue is
                  located in a middle of jungles, under the stars and around the
                  giant Banyan tree<br></br>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              ref={ref3}
              initial={{ opacity: 1 }}
              animate={isInView3 ? "scrolled" : "base"}
              variants={variantsTextLeft}
              className="flex flex-col self-start"
            >
              <div className="flex">
                <img
                  src={"/images/ecstatic-home.jpg"}
                  style={{
                    opacity: 1,
                    filter: " contrast(110%) brightness(40%)",
                    left: 0,
                    top: 0,
                    objectFit: "cover",
                    height: "835px",
                    zIndex: 20,
                  }}
                />
              </div>

              <div className="flex flex-col self-center justify-center w-5/6 -mt-[835px] h-[835px]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    isInView3
                      ? {
                          opacity: 0.7,
                          transition: { duration: 0.3, delay: 0.3 },
                        }
                      : { opacity: 0 }
                  }
                  className="text-gold2 text-center relative font-custom3 mt-[30px] text-[70px] z-[100] "
                >
                  Ecstatic<br></br>Dance
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    isInView3
                      ? {
                          opacity: 0.7,
                          transition: { duration: 0.3, delay: 0.6 },
                        }
                      : { opacity: 0 }
                  }
                  className="text-limeDark relative text-[6.8vw] mt-10 md:text-[30px] font-custom2 opacity-70 z-[100]"
                >
                  We are an international Ecstatic Dance venue and community in
                  Goa since 2021. We host dances two times in a week every month
                  with renowned dj’s from all over the World. We also have a
                  nice vegetarian cafe and tea ceremony corner.<br></br>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              ref={ref4}
              initial={{ opacity: 1 }}
              animate={isInView4 ? "scrolled" : "base"}
              variants={variantsTextLeft}
              className="flex flex-col self-start"
            >
              <div className="flex">
                <img
                  src={"/images/concert-home.jpg"}
                  style={{
                    opacity: 1,
                    filter: " contrast(130%) brightness(40%)",
                    left: 0,
                    top: 0,
                    objectFit: "cover",
                    height: "835px",
                    zIndex: 20,
                  }}
                />
              </div>

              <div className="flex flex-col self-center w-5/6 justify-center -mt-[835px] h-[835px]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    isInView4
                      ? {
                          opacity: 0.7,
                          transition: { duration: 0.3, delay: 0.3 },
                        }
                      : { opacity: 0 }
                  }
                  className="text-gold2 text-center relative font-custom3 mt-[30px] text-[70px] z-[100] "
                >
                  Live Concerts
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    isInView4
                      ? {
                          opacity: 0.7,
                          transition: { duration: 0.3, delay: 0.6 },
                        }
                      : { opacity: 0 }
                  }
                  className="text-limeDark relative text-[6.8vw] mt-10 md:text-[30px] font-custom2 opacity-70 z-[100]"
                >
                  Elevate your senses at our live concerts. Immerse yourself in
                  electrifying performances, feel the music pulsate through your
                  soul, and create unforgettable memories with friends and
                  family. Join us for a night of musical magic and pure
                  entertainment. <br></br>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              ref={ref5}
              initial={{ opacity: 1 }}
              animate={isInView5 ? "scrolled" : "base"}
              variants={variantsTextLeft}
              className="flex flex-col self-start h-[100vh]"
            >
              <div className="flex">
                <img
                  src={"/images/DSC_1444.jpeg"}
                  style={{
                    opacity: 1,
                    filter: " contrast(110%) brightness(60%)",
                    left: 0,
                    top: 0,
                    objectFit: "cover",
                    height: "835px",
                    zIndex: 20,
                  }}
                />
              </div>

              <div className="flex flex-col self-center w-5/6 justify-center -mt-[835px] h-[835px]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    isInView5
                      ? {
                          opacity: 0.7,
                          transition: { duration: 0.3, delay: 0.3 },
                        }
                      : { opacity: 0 }
                  }
                  className="text-gold2 text-center relative font-custom3 mt-[30px] text-[70px] z-[100] "
                >
                  Workshops
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    isInView5
                      ? {
                          opacity: 0.7,
                          transition: { duration: 0.3, delay: 0.6 },
                        }
                      : { opacity: 0 }
                  }
                  className="text-limeDark relative text-[6.8vw] mt-10 md:text-[30px] font-custom2 opacity-70 z-[100]"
                >
                  Experience workshops that nurture inner serenity and holistic
                  balance. Connect with your inner self through mindfulness
                  practices, explore the path to well-being, and embark on a
                  transformative journey toward personal growth and
                  self-discovery.<br></br>
                </motion.div>
              </div>
            </motion.div>

            {
              //<Text className="text-gold2 text-[80px] font-custom2">Shunya Wellness</Text>
            }
          </div>
        </div>
      </motion.div>
    </main>
  );
};
export default Home;
