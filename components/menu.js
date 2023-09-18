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

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const router = useRouter();
  const menuElements = {

  
    "Home":"index",
    "Ecstatic Dance":"ecstatic",
    "Workshops":"workshops",
    "Carnival":"carnival",
    "Stay":"stay",
    "Our Team":"team",
  }
  return (

    <div>
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
        <DrawerHeader fontSize={"2xl"} className="font-custom1 font-black">
          Shunya Wellness
        </DrawerHeader>

        <DrawerBody>
          <div className="flex flex-col">
            {Object.keys(menuElements).map((element) => {
              return <Link className="mt-5 font-custom2" href={element==="Home"?"/":("/"+menuElements[element])}>{element}</Link>;
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
