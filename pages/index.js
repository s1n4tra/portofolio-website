import { Container, Box, Heading, Image, Link, Button, List, ListItem, ListIcon, Icon, useColorModeValue, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { FaRegHeart, FaReact, FaPython, FaStar } from 'react-icons/fa'
import Layout from '../components/layouts/article'
import { IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from 'react-icons/io5'


const Page = ( ) => {
  return (
    <Layout >
      <Container w='100%' h='100%'>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center" mb={6} color={useColorModeValue( 'black', 'white')} mt={10}>
          Hello I'm a full-stack developer in Kazakhstan
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Barlykov Beket
            </Heading>
            <p>Wannabe Data Scientist(React / ChakraUI/ VoxelArt)</p>
          </Box>
          <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align='center'>
            <Image 
            width={100}
            height={100}
            bordeRadius="50%"
            borderColor="whiteAlpha.800" 
            borderWidth={2} 
            borderStyle="solid" 
            maxWidth="100px" 
            display="inline-block"
            borderRadius="full" 
            src='/images/avatar.jpg'/>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Projects
          </Heading>
          <Paragraph>
            Beket is a enthusiastic guy{' '}
            <NextLink href="">
              <Link>Project</Link>
            </NextLink>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                My portfolio
              </Button>
            </NextLink>
            <NextLink href="/voxelProjects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple" ml={10}>
                My Voxel Art
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Aktobe, Kazakhstan
          </BioSection>
          <BioSection>
            <BioYear>2013 - 2019</BioYear>
            High School: NIS Aktobe 
          </BioSection>
          <BioSection>
            <BioYear>2019-2020</BioYear>
            Seoul National University
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ❤️
          </Heading>
          <Paragraph>
            <List>
              <ListItem>
                <ListIcon as={FaRegHeart} color={useColorModeValue('black', 'white')}/>Books 📚
              </ListItem>
              <ListItem>
                <ListIcon as={FaRegHeart} color={useColorModeValue('black', 'white')}/>Music 🎵
              </ListItem>
              <ListItem>
                <ListIcon as={FaRegHeart} color={useColorModeValue('black', 'white')}/>Playing guitar 🎸
              </ListItem>
              <ListItem>
                <ListIcon as={FaRegHeart} color={useColorModeValue('black', 'white')}/>Voxel Art 🎨
              </ListItem>
            </List>
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I am <b>learning</b>
          </Heading>
          <Paragraph>
            <List>
              <ListItem>
                <ListIcon as={FaStar} color={useColorModeValue('black', 'white')}/>Web Development (React, Next) <Icon as={FaReact}/>
              </ListItem>
              <ListItem>
                <ListIcon as={FaStar} color={useColorModeValue('black', 'white')} />Machine Learning (Python) <Icon as={FaPython}/>
              </ListItem>
              <ListItem>
                <ListIcon as={FaStar} color={useColorModeValue('black', 'white')} />MagicaVoxel 🎨
              </ListItem>
            </List>
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            Contact With Me!!!
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/s1n4tra"target="_blank">
                <Button variant="ghost" colorScheme="purple" leftIcon={<IoLogoGithub />}>
                  @s1n4tra
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/s1n4traa/"target="_blank">
                <Button variant="ghost" colorScheme="purple" leftIcon={<IoLogoInstagram />}>
                  @s1n4traa
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.discordapp.com/users/s1n4tra#9642"target="_blank">
                <Button variant="ghost" colorScheme="purple" leftIcon={<IoLogoDiscord />}>
                  @s1n4tra#9642
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page;