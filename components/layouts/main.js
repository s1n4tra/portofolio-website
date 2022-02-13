import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog'
import dynamic from 'next/dynamic'

const LazyVoxel = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDog />
})

const Main = ({ children, router}) => {
  return(
    <Box as='main' pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Barlykov Beket - homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14} bg={useColorModeValue('#f0e7db', '#20202380')}>
        <LazyVoxel />
        {children}
      </Container>
    </Box>
  )
}

export default Main