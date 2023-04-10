import { type AppType } from "next/app";

import { api } from "y/utils/api";
import { ChakraProvider } from "@chakra-ui/react";

import "y/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default api.withTRPC(MyApp);
