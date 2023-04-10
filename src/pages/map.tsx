import React from "react";
import { Container, AspectRatio, Image } from "@chakra-ui/react";

export default function Maps() {
  return (
    <Container maxW="7xl" mt={"100px"} color="">
      <AspectRatio ratio={8 / 4}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34388.98224897829!2d121.54880037184479!3d25.04437226642138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac6b61dbbd8b%3A0xbcd1baad5c06a482!2sTaipei%20City%2C%20Taiwan!5e0!3m2!1sen!2shk!4v1681117610494!5m2!1sen!2shk"></iframe>
      </AspectRatio>
    </Container>
  );
}
