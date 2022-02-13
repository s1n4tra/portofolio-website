import { Container, Badge } from '@chakra-ui/react'
import { Title } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import VoxelModel from '../../components/anyVoxel'



const Project = () => {
  return (
    <Layout title=" California Housing price estimation">
      <Container>
        <Title>
          Knight - voxel model <Badge>2021</Badge>
        </Title>
        <VoxelModel model="knight" />
      </Container>
    </Layout>
  )
}

export default Project