import React, { useState, useEffect, useRef } from "react";
import Menu from "@/components/menu";
import { motion, useMotionValueEvent, useInView } from "framer-motion";
import { Text } from "@chakra-ui/react";
import useDimensions from "@/components/useDimensions";
import Logo from "@/components/logo";
import { useScroll } from "framer-motion";
const Ecstatic = () => {
  const dimensions = useDimensions();
  const { scrollY, scrollYProgress } = useScroll();
  const [tracker, setTracker] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7});
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { amount: 0.75});

  const variantsTextLeft = {
    base: { opacity: 0, x: -100, transition: { duration: 1 } },
    scrolled: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const variantsTextRight = {
    base: { opacity: 0, x: +100, transition: { duration: 1 } },
    scrolled: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!scrolled) setScrolled(true);
  });
  return (
    <div className="bg-black">
      <Menu />
      <main className=" flex-col -mt-6 overflow-clip">
        <div className="flex flex-col items-center overflow-clip bg-black">
          {/*<Text className="text-[30px] md:text-[60px] text-amber-400 mt-[40px] md:mt-[20px] z-[11]">
            Ecstatic Dance
  </Text>*/}

          <div className=" flex overflow-hidden">
            <Logo />
            <video
              className="z-[10]"
              autoPlay
              muted
              loop
              style={{
                filter: "hue-rotate(120deg)",
                opacity: 0.7,
                width: ((dimensions.height + 30) * 16) / 9,
                height: dimensions.height + 30,
                top: 0,
                left: 0,
                objectFit: "cover",
              }}
            >
              <source src="./videos/ecstatic-reel.mp4" />
            </video>
          </div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? "scrolled" : "base"}
            variants={variantsTextLeft}
            className="w-3/4  ml-10 md:ml-20 self-start z-[20]"
          >
            <Text className="text-greenDark text-[32px] mt-[150px]">
              Ecstatic Dance
            </Text>
            <Text className="text-greenLight relative text-[24px] md:text-[30px] mt-6 z-[100]">
              Throughout human history, people have practiced some form of dance
              as a way of altering one’s consciousness and connecting with
              nature, other, and self. The modern day movement of ecstatic dance
              brings us back to these ancient practices, with the influence of
              Gabrielle Roth’s 5Rhythms practice
            </Text>
          </motion.div>

          <motion.div  ref={ref2}
            initial={{ opacity: 0 }}
            animate={isInView2 ? "scrolled" : "base"}
            variants={variantsTextRight}
            className="w-3/4  ml-10 md:ml-20 self-start z-[20] mt-[40px] mb-[200px]">
          <Text className="text-greenDark text-center text-[32px]">
              The Team<br></br><br></br>
            </Text>
            <motion.img
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={"/images/team/marsy.jpeg"}
                style={{
                  opacity: 1,
                  filter: "grayscale(100%) contrast(130%)",
                  left: 0,
                  top: 0,
                  width: (dimensions.width),
                  zIndex: 10,
                  objectFit:"cover"
                }}
              />
              <Text className="text-greenLight relative text-[16px] text-center md:text-[30px] mt-2 z-[100]">Marsy Anna</Text>
            </motion.div >
           
          
        </div>
      </main>
    </div>
  );
};
export default Ecstatic;
