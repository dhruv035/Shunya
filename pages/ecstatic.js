import React from "react";
import Menu from "@/components/menu";
import { Text } from "@chakra-ui/react";
import useDimensions from "@/components/useDimensions";
const Ecstatic = () => {
    const dimensions = useDimensions();
  return (
    <div>
       <Menu />
      <main className=" flex-col -mt-6"> 
      <div
        className="-z-[2] flex px-6 bg-black w-full h-full fixed"
      />
        <div className="flex flex-col items-center ">
        <Text className="text-[30px] md:text-[60px] text-amber-400 mt-[40px] md:mt-[20px]">
            Ecstatic Dance
          </Text>

          <div className=" flex overflow-hidden -mt-[140px] md:-mt-[180px]">
            
            <video
              className="-z-[1]"
              autoPlay
              muted
              loop
              style={{
                opacity: 0.7,
                width:(dimensions.height+80)*16/9,
                height:dimensions.height+80,
                top:0,
                left:0,
                objectFit:"cover",
                filter: "grayscale(70%)",
              }}
            >
              <source src="./videos/ecstatic-bg.mp4" />
            </video>
          </div>
          
          <div className="w-3/4  ml-10 md:ml-20 self-start">
            <Text className="text-greenLight relative text-[16px] md:text-[30px] mt-6 opacity-50 z-[100]">
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
          </div>
        </div>
      </main>
    </div>
  );
};
export default Ecstatic;
