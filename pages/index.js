import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import {  motion, useScroll, useMotionValueEvent, useTransform} from "framer-motion";
import useDimensions from "@/components/useDimensions";
const inter = Inter({ subsets: ["latin"] });
import { background, useDisclosure } from "@chakra-ui/react";
import { IconButton, Input, Button, Link, Text } from "@chakra-ui/react";
import Menu from "@/components/menu";
const logoTextClass = "text-[25px] my-2 w-[65vw] text-limeLight font-custom3 ";
const Home = () => {
  const menuElements = [
    "Home",
    "Ecstatic Dance",
    "Workshops",
    "Carnival",
    "Our Team",
  ];
  const {scrollY} = useScroll();
  const [tracker,setTracker] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(0);
  const btnRef = React.useRef();
  const [scrolling, setScrolling]= useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  const logoVariants={
    initial:{opacity:0, transition:{duration:0.5}},
    base:{opacity:1, transition:{duration:0.5}},
    scrolled:{scale:0.2, opacity:0.6, x:-130,y:-265, transition:{duration:0.5}}
  }

  const textLeftVariants={
    initial:{x:"-100%"},
    base:{x:0},
    scrolled:{x:"-100%", transition:{duration:0.3}}
  }

  const textRightVariants={
    initial:{x:"+100%"},
    base:{x:0},
    scrolled:{x:"+100%", transition:{duration:0.3}}
  }

  useEffect(()=>{
    console.log(scrollY)
  },[scrollY])
  /*useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 5000 ms = 5 seconds

    return () => clearTimeout(timer);
  }, []);*/
  const windowDimensions = useDimensions();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if(!scrolled)
    setScrolled(true)
    setTracker(latest)
  })
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
          <div className=" flex flex-col h-max w-[100vw] items-center self-start bg-black">
            {<motion.img
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={"/images/banyan.jpg"}
              style={{
                marginTop: windowDimensions.width<700?"-150px":"-160px",
                opacity: 1,
                filter: "grayscale(100%) contrast(130%)",
                left: 0,
                top: 0,
                width:(windowDimensions.height+80)*16/9,
                objectFit: "cover",
                height:windowDimensions.height+100,
                zIndex: 10,
                
              }}
            />}
            <motion.img
            
              initial={{opacity:0}}
              animate={tracker>0?"scrolled":"base"}
              variants={logoVariants}
              transition={{ duration:0.5 }}
              className="shunya-logo fixed mt-20"
              src={"/images/shunyaLogo.png"}
              style={{
                opacity: 1,
                marginTop:
                  windowDimensions.width > windowDimensions.height
                    ? (windowDimensions.height * 1) / 10
                    : (windowDimensions.width * 4) / 10,
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
            <div className="flex flex-col -mt-40 z-20 overflow-clip">
              <motion.div
                 initial={tracker>0?"base":"initial"}
                 animate={tracker>0?"scrolled":"base"}
                variants={textLeftVariants}
                transition={{ duration: 0.3, delay: scrolled?0:1 }}
                className={logoTextClass + "text-left"}
              >
                ECSTATIC DANCE
              </motion.div>
              <motion.div
                initial={tracker>0?"base":"initial"}
                animate={tracker>0?"scrolled":"base"}
                variants={textRightVariants}
                transition={{ duration: 0.3, delay: scrolled?0:1.2 }}
                className={logoTextClass + "text-right overflow-hidden"}
              >
                WELLNESS RETREAT
              </motion.div>
              <motion.div
                 initial={tracker>0?"base":"initial"}
                 animate={tracker>0?"scrolled":"base"}
                variants={textLeftVariants}
                transition={{ duration: 0.3, delay: scrolled?0:1.5 }}
                className={logoTextClass}
              >
                ART SPACE
              </motion.div>
              
            </div>
            <Text className="text-greenLight relative text-[16px] md:text-[30px] mt-10 opacity-50 z-[100]">
              Throughout human history, people have practiced some form of dance
              as a way of altering one’s consciousness and connecting with
              nature, other, and self. The modern day movement of ecstatic dance
              brings us back to these ancient practices, with the influence of
              Gabrielle Roth’s 5Rhythms practice, conscious dance movement
              meditations, yoga, and somatic therapies flourishing today. It is
              a free-form dance practice where participants can gather to dance
              to music without the need of following the instructions of a
              leader. In Ecstatic Dance the music is the leader and participants
              are free to weave their way through the different soundscapes.
              Throughout human history, people have practiced some form of dance
              as a way of altering one’s consciousness and connecting with
              nature, other, and self. The modern day movement of ecstatic dance
              brings us back to these ancient practices, with the influence of
              Gabrielle Roth’s 5Rhythms practice, conscious dance movement
              meditations, yoga, and somatic therapies flourishing today. It is
              a free-form dance practice where participants can gather to dance
              to music without the need of following the instructions of a
              leader. In Ecstatic Dance the music is the leader and participants
              are free to weave their way through the different soundscapes.
              Throughout human history, people have practiced some form of dance
              as a way of altering one’s consciousness and connecting with
              nature, other, and self. The modern day movement of ecstatic dance
              brings us back to these ancient practices, with the influence of
              Gabrielle Roth’s 5Rhythms practice, conscious dance movement
              meditations, yoga, and somatic therapies flourishing today. It is
              a free-form dance practice where participants can gather to dance
              to music without the need of following the instructions of a
              leader. In Ecstatic Dance the music is the leader and participants
              are free to weave their way through the different soundscapes.
            </Text>
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
