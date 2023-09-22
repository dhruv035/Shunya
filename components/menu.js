import React from "react";
import { background, useDisclosure } from "@chakra-ui/react";
import { IconButton, Input, Button, Link, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import useDimensions from "./useDimensions";

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const router = useRouter();
  const {width,height}=useDimensions()
  const logoScale = 0.15
  const menuElements = {
  
  
    "Home":"index",
    "Ecstatic Dance":"ecstatic",
    "Workshops":"workshops",
    "Carnival":"carnival",
    "Stay":"stay",
    "Our Team":"team",
  }
  return (

    <div className="flex flex-row-reverse ">
       <IconButton
          className="fixed z-[20] mr-8"
          onClick={onOpen}
          style={{ position: "fixed", background: "transparent", opacity:"0.7", marginTop: width*4*logoScale/10 }}
          aria-label="Drawer-Icon"
          icon={<HamburgerIcon boxSize={`${width<810?width/15:50}px`} color="#C0D065" />}
        />
    <Drawer
      isOpen={isOpen}
      style={{opacity:0.2}}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      color="#131313"
    >
      <DrawerOverlay
       />
      <DrawerContent backgroundColor="#000000" opacity={"0.5"}  color={"#FCA311"}>
        <DrawerCloseButton />
        <DrawerHeader fontSize={"2xl"} className="font-custom1 font-black">
          Shunya Wellness
        </DrawerHeader>

        <DrawerBody>
          <div className="flex flex-col">
            {Object.keys(menuElements).map((element, index) => {
              return <Link key={index+"menu"} className="mt-5 font-custom2" href={element==="Home"?"/":("/"+menuElements[element])}>{element}</Link>;
            })}
          </div>
        </DrawerBody>

        <DrawerFooter>
          <Button
            variant="link"
            color="golden"
            className="font-custom1"
            mr={3}
            onClick={()=>{router.push("/contact")}}
          >
            Contact Us
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    </div>
  );
};

export default Menu;
