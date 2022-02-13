import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Project = () => {
  return (
    <Layout title=" CSGO Round winner predictor">
      <Container>
        <Title>
          Data Science project <Badge>2021</Badge>
        </Title>
        <P>
          Data Science project for identifier handwritten number using different Machine learning classifiers trained on MNIST dataset
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Data Science Project</Meta>
            <Link href='https://colab.research.google.com/drive/11Ava4BHANi3-KmizZ2q5PPDrkCKHu0uA?usp=sharing'>
              Google Colab Link <ExternalLinkIcon mx="2px"/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Google Colab</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python: NumPy, Sci-kit, PyPlot, Pandas, MatPlotLib, Seaborn</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Project