import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import theme from '../libs/theme'
import { AnimatePresence } from "framer-motion";


const Website = ({ Component, pageProps, router }) => {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )

  return getLayout(<Component {...pageProps} />)
}

export default Website