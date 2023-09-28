import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useInView,
} from "framer-motion";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config.js";
const twFullConfig = resolveConfig(tailwindConfig);
import useDimensions from "@/components/useDimensions";
import Menu from "@/components/menu";
import { theme } from "@/tailwind.config";

{
  /*width:
    windowDimensions.width < windowDimensions.height &&
    windowDimensions.width < 1300
      ? "auto"
      : windowDimensions.width + 200,
  height:
    windowDimensions.width < windowDimensions.height &&
    windowDimensions.width < 1300
      ? windowDimensions.height + 100
      : windowDimensions.height,*/
}

const AnimatedImage = styled.img`
  width: ${({ windowDimensions }) => {
    return windowDimensions.width < windowDimensions.height &&
      windowDimensions.width < 1300
      ? "auto"
      : (windowDimensions.width + 200).toString() + "px";
  }};
  height: ${({ windowDimensions }) => {
    return windowDimensions.width < windowDimensions.height &&
      windowDimensions.width < 1300
      ? (windowDimensions.height + 100).toString() + "px"
      : windowDimensions.height + "px";
  }};
  object-fit: cover;
  filter: contrast(110%) brightness(40%);
  .home: {
    filter: brightness(100%);
  }
`;

const AnimatedImageHome = styled.img`
  width: ${({ windowDimensions }) => {
    return windowDimensions.width < windowDimensions.height &&
      windowDimensions.width < 1300
      ? "auto"
      : (windowDimensions.width + 400).toString() + "px";
  }};
  height: ${({ windowDimensions }) => {
    return windowDimensions.width < windowDimensions.height &&
      windowDimensions.width < 1300
      ? (windowDimensions.height + 100).toString() + "px"
      : windowDimensions.height + "px";
  }};
  object-fit: cover;
  filter: contrast(110%);
`;

const LogoContainer = styled.div`
  top: ${({ windowDimensions }) => {
    return  windowDimensions.height / 6 + "px";
  }};
`;

const OverlapContainer = styled.div`
  height: ${({ windowDimensions }) => {
    return windowDimensions.width < windowDimensions.height &&
      windowDimensions.width < 1300
      ? (windowDimensions.height + 100).toString() + "px"
      : windowDimensions.height + "px";
  }};
  margin-top: ${({ windowDimensions }) => {
    return windowDimensions.width < windowDimensions.height &&
      windowDimensions.width < 1300
      ? (-1 * (windowDimensions.height + 100)).toString() + "px"
      : windowDimensions.height * -1 + "px";
  }};
  font-size: ${({ windowDimensions }) => {
    return (
      (
        (windowDimensions.width * 1.5) / 100 +
        (windowDimensions.height * 2.8) / 100
      ).toString() + "px"
    );
  }};
`;

const LogoText = styled.div`
  margin-top: ${({ windowDimensions }) => {
    return windowDimensions.width > windowDimensions.height
      ? (windowDimensions.height * 8) / 10 + "px"
      : (windowDimensions.width * 8) / 10 +
          windowDimensions.height / 6 +
          windowDimensions.height / 9 +
          "px";
  }};
  font-size: ${({windowDimensions})=>{
    return 
  }}
`;


const InnerTitle = styled.div`
color: ${twFullConfig.theme.colors["gold2"]};
text-align:center;
position: relative;
font-size: 65px;
z-index-100;
font-family: Custom-3;
`;

const InnerText = styled.div`
margin-top:2.5rem;
opacity-0.7;
z-index: 100;
color: ${twFullConfig.theme.colors["limeDark"]};
font-family: Custom-2
`;

const logoTextClass = "text-[25px] my-2 w-[65vw] text-limeLight font-custom3 ";
const Home = () => {
  const dimensions = useDimensions();
  const [windowDimensions, setWindowDimensions] = useState(dimensions);
  const { scrollY } = useScroll();
  const [tracker, setTracker] = useState();
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { amount: 0.3 });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { amount: 0.3 });
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { amount: 0.3 });
  const ref5 = useRef(null);
  const isInView5 = useInView(ref5, { amount: 0.3 });
  const ref6 = useRef(null);
  const isInView6 = useInView(ref6, {
    amount: 0.5,
    margin: "-200px 100px 100px 100px",
  });
  const [delay, setDelay] = useState(1.2);

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
          ? (-windowDimensions.width * (5 - 4 * logoScale)) / 10 + 15
          : -windowDimensions.width/2+windowDimensions.height*3.5/10*logoScale+windowDimensions.width*1/100,
      y:
        windowDimensions.height > windowDimensions.width
          ? -windowDimensions.height / 6 -
            ((windowDimensions.width * 2) / 5) * (1 - logoScale) +
            20
          : -windowDimensions.height / 6 -
          ((windowDimensions.height * 3.5) / 10) + windowDimensions.height*3.5*logoScale/10+20+windowDimensions.height*3.5*logoScale/20,
      transition: { duration: 0.5 },
    },
  };

  const variantsTextLeft = {
    base: { opacity: 0.2, x: -80, transition: { duration: 1 } },
    scrolled: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const variantsTextRight = {
    base: { opacity: 0.2, x: +80, transition: { duration: 1 } },
    scrolled: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  var textLeftVariants = {
    base: { opacity: 1, y: 0, transition: { duration: 0.6, delay: delay } },
    scrolled: { opacity: 0, y: +40, transition: { duration: 0.6, delay: 0 } },
  };

  var textRightVariants = {
    base: { opacity: 1, y: 0, transition: { duration: 0.6, delay: delay } },
    scrolled: { opacity: 0, y: +40, transition: { duration: 0.6, delay: 0 } },
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setTracker(latest);
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(0);
    }, 1000); // 5000 ms = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const height = " h-[" + windowDimensions.height + "] ";

  const gidth =
    windowDimensions.width < windowDimensions.height &&
    windowDimensions.width < 1300
      ? " w-auto "
      : " w-[" + (windowDimensions.width + 200).toString() + "] ";
  console.log("W", gidth);
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
              <motion.div
                ref={ref}
                initial={{ opacity: 1 }}
                animate={!isInView && isInView2 ? "base" : "scrolled"}
                variants={variantsTextLeft}
                transition={{ duration: 0.5 }}
              >
                <AnimatedImageHome
                  windowDimensions={windowDimensions}
                  src={"/images/banyan-home.jpg"}
                />
              </motion.div>
            }
            <LogoContainer
              windowDimensions={windowDimensions}
              className=" shunya-logo fixed z-[100]"
              //filter: "hue-rotate(90deg) contrast(160%)",
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={tracker > 0 ? "scrolled" : "base"}
                variants={logoVariants}
                transition={{ duration: 0.5 }}
                width={
                  windowDimensions.width > windowDimensions.height
                    ? (windowDimensions.height * 7) / 10
                    : (windowDimensions.width * 8) / 10
                }
                src={"/images/shunyaLogo.png"}
              />
            </LogoContainer>
            <OverlapContainer
              windowDimensions={windowDimensions}
              ref={ref6}
              className="flex flex-col z-20 "
            >
              <LogoText windowDimensions={windowDimensions}>
                <motion.div
                  initial={"scrolled"}
                  animate={!isInView6 ? "scrolled" : "base"}
                  variants={textLeftVariants}
                  className={logoTextClass + "text-left"}
                  style={{
                    fontSize:windowDimensions.width/100+windowDimensions.height*2/100
                  }}
                >
                  ECSTATIC DANCE
                </motion.div>
                <motion.div
                  initial={"scrolled"}
                  animate={!isInView6 ? "scrolled" : "base"}
                  variants={textRightVariants}
                  transition={{ duration: 0.6, delay: 1 }}
                  className={logoTextClass + "text-right overflow-hidden"}
                  style={{
                    fontSize:windowDimensions.width/100+windowDimensions.height*2/100
                  }}
                >
                  WELLNESS RETREAT
                </motion.div>
                <motion.div
                  initial={"scrolled"}
                  animate={!isInView6 ? "scrolled" : "base"}
                  variants={textLeftVariants}
                  transition={{ duration: 0.6, delay: 1 }}
                  className={logoTextClass}
                  style={{
                    fontSize:windowDimensions.width/100+windowDimensions.height*2/100
                  }}
                >
                  ART SPACE
                </motion.div>
              </LogoText>
            </OverlapContainer>

            <motion.div
              ref={ref2}
              initial={{ opacity: 1 }}
              animate={isInView2 && !isInView ? "scrolled" : "base"}
              variants={variantsTextLeft}
              className="flex flex-col self-start"
            >
              <div className="flex">
                <AnimatedImage
                  windowDimensions={windowDimensions}
                  src={"/images/shunya-wellness-home.jpg"}
                />
              </div>
              <OverlapContainer
                windowDimensions={windowDimensions}
                className="flex flex-col self-center w-[85%] justify-center z-[100]"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    isInView2 && !isInView
                      ? {
                          opacity: 0.7,
                          transition: { duration: 0.3, delay: 0.3 },
                        }
                      : { opacity: 0 }
                  }
                >
                  <InnerTitle>Shunya Wellness</InnerTitle>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    isInView2 && !isInView
                      ? {
                          opacity: 0.7,
                          transition: { duration: 0.3, delay: 0.6 },
                        }
                      : { opacity: 0 }
                  }
                >
                  <InnerText>
                    Every year, from November through April,{" "}
                    <i className="text-gold2 font-custom2 font-black">
                      Shunya Wellness,{" "}
                    </i>
                    nestled within a jungle, attracts people worldwide. Nomads,
                    travelers, musicians, and dancers gather beneath the starry
                    skies around a towering Banyan tree. It&apos;s a unique
                    destination where a global community forms, uniting under
                    nature&apos;s canopy.
                    <br></br>
                  </InnerText>
                </motion.div>
              </OverlapContainer>
            </motion.div>

            <motion.div
              ref={ref3}
              initial={{ opacity: 1 }}
              animate={isInView3 && !isInView2 ? "scrolled" : "base"}
              variants={variantsTextRight}
              className="flex flex-col self-start"
            >
              <div className="flex">
                <AnimatedImage
                  windowDimensions={windowDimensions}
                  src={"/images/ecstatic-home.jpg"}
                />
              </div>

              <OverlapContainer
                windowDimensions={windowDimensions}
                className="flex flex-col self-center justify-center w-[85%]"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    isInView3 && !isInView2
                      ? {
                          opacity: 0.7,
                          transition: { duration: 0.3, delay: 0.3 },
                        }
                      : { opacity: 0 }
                  }
                >
                  <InnerTitle>Ecstatic Dance</InnerTitle>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    isInView3 && !isInView2
                      ? {
                          opacity: 0.7,
                          transition: { duration: 0.3, delay: 0.6 },
                        }
                      : { opacity: 0 }
                  }
                >
                  <InnerText>
                    Since 2021, we&apos;ve been the heart of Ecstatic Dance in
                    Goa, hosting bi-weekly dance sessions with acclaimed DJs
                    from across the globe. Our vibrant community welcomes all to
                    join in the rhythmic celebration. In addition to the dance
                    floor, we offer a delightful vegetarian cafe and a serene
                    tea ceremony corner.<br></br>
                  </InnerText>
                </motion.div>
              </OverlapContainer>
            </motion.div>

            <motion.div
              ref={ref4}
              initial={{ opacity: 1 }}
              animate={isInView4 && !isInView3 ? "scrolled" : "base"}
              variants={variantsTextLeft}
              className="flex flex-col self-start"
            >
              <div className="flex">
                <AnimatedImage
                  windowDimensions={windowDimensions}
                  src={"/images/concert-home.jpg"}
                />
              </div>

              <OverlapContainer
                windowDimensions={windowDimensions}
                className="flex flex-col self-center w-[85%] justify-center"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    isInView4 && !isInView3
                      ? {
                          opacity: 0.7,
                          transition: { duration: 0.3, delay: 0.3 },
                        }
                      : { opacity: 0 }
                  }
                >
                  <InnerTitle>Live Concerts</InnerTitle>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    isInView4 && !isInView3
                      ? {
                          opacity: 0.7,
                          transition: { duration: 0.3, delay: 0.6 },
                        }
                      : { opacity: 0 }
                  }
                >
                  <InnerText>
                    Elevate your senses at our live concerts. Immerse yourself
                    in electrifying performances, feel the music pulsate through
                    your soul, and create unforgettable memories with friends
                    and family. Join us for a night of musical magic and pure
                    entertainment. <br></br>
                  </InnerText>
                </motion.div>
              </OverlapContainer>
            </motion.div>

            <motion.div
              ref={ref5}
              initial={{ opacity: 1 }}
              animate={isInView5 && !isInView4 ? "scrolled" : "base"}
              variants={variantsTextRight}
              className="flex flex-col self-start h-[100vh]"
            >
              <div className="flex">
                <AnimatedImage
                  windowDimensions={windowDimensions}
                  src={"/images/workshop-home.jpeg"}
                />
              </div>

              <OverlapContainer
                windowDimensions={windowDimensions}
                className="flex flex-col self-center w-[85%] justify-center"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    isInView5 && !isInView4
                      ? {
                          opacity: 0.7,
                          transition: { duration: 0.3, delay: 0.3 },
                        }
                      : { opacity: 0 }
                  }
                >
                  <InnerTitle>Workshops</InnerTitle>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    isInView5 && !isInView4
                      ? {
                          opacity: 0.7,
                          transition: { duration: 0.3, delay: 0.6 },
                        }
                      : { opacity: 0 }
                  }
                >
                  <InnerText>
                    Experience workshops that nurture inner serenity and
                    holistic balance. Connect with your inner self through
                    mindfulness practices, explore the path to well-being, and
                    embark on a transformative journey toward personal growth
                    and self-discovery.<br></br>
                  </InnerText>
                </motion.div>
              </OverlapContainer>
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
