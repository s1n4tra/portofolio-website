import { Container, Box, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import NavLink from 'next/link'
import thumbnailHousing from '../public/images/projects/house_project.jpg'
import thumbnailCSGO from '../public/images/projects/csgo.jpg'
import thumbnailMNIST from '../public/images/projects/mnist.png'
import thumbnailMovies from '../public/images/projects/beket_movies1.png'

const Projects = () => {
  return (
    <Container>
      <Heading as="h2" fontSize={20} mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <NavLink href="/projects/housingestimation">
          <Section delay={0.3}>
            <ProjectGridItem id="housingestimation" title="California Housing price estimation" thumbnail={thumbnailHousing}>
              California Housing price estimation
            </ProjectGridItem>
          </Section>
        </NavLink>
        <NavLink href="/projects/csgo">
          <Section delay={0.4}>
            <ProjectGridItem id="csgo" title="CSGO Round winner predictor" thumbnail={thumbnailCSGO}>
              CSGO Round winner predictor
            </ProjectGridItem>
          </Section>
        </NavLink>
        <NavLink href="/projects/mnist">
          <Section delay={0.4}>
            <ProjectGridItem id="mnist" title="MNIST Number identifier" thumbnail={thumbnailMNIST}>
              MNIST Number identifier
            </ProjectGridItem>
          </Section>
        </NavLink>
        <NavLink href="/projects/beket-movies">
          <Section delay={0.4}>
            <ProjectGridItem id="beket-movies" title="'Beket Movies' -   movies search website" thumbnail={thumbnailMovies}>
              'Beket Movies' - movies search website
            </ProjectGridItem>
          </Section>
        </NavLink>
      </SimpleGrid>
    </Container>
  )
}

export default Projects