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
          Data Science project <Badge>2021</Badge>
        </Title>
        <P>
          Data Science project for predicting housing prices in California using Machine Learning Regressors
        </P>
        <VoxelModel model="cat"/>
      </Container>
    </Layout>
  )
}

export default Project