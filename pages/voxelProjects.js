import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { VoxelGridItem, GridItem } from '../components/grid-item'
import NavLink from 'next/link'

import thumbVoxelKnight from '../public/images/voxelart/chr_knight.png'
import thumbVoxelCars from '../public/images/voxelart/cars.png'
import thumbVoxelRoom from '../public/images/voxelart/room.png'
import thumbVoxelSakura from '../public/images/voxelart/sakura.png'


const VoxelArts = () => {
  return (
    <Layout title="Voxel Arts">
      <Container>
        <Heading as="h2" fontSize={20} mb={4}>
          My Voxel Arts
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <NavLink href="/projects/knight">
            <Section delay={0.3}>
              <VoxelGridItem id="knight" title="Voxel Knight" thumbnail={thumbVoxelKnight}></VoxelGridItem>
            </Section>
          </NavLink>
          <NavLink href="/projects/tree">
            <Section delay={0.3}>
              <VoxelGridItem id="tree"title="Voxel Sakura Tree" thumbnail={thumbVoxelSakura}></VoxelGridItem>
            </Section>
          </NavLink>
          <NavLink href="/projects/cat">
            <Section delay={0.3}>
              <VoxelGridItem id="cat" title="cat" thumbnail={thumbVoxelCars}></VoxelGridItem>
            </Section>
          </NavLink>
          <GridItem title="Voxel Room" thumbnail={thumbVoxelRoom} href="#"></GridItem>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}



export default VoxelArts