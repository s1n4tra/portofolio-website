import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, ProjectImage } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Project = () => {
  return (
    <Layout title="Beket - Movies website">
      <Container>
        <Title>
          Frontend Project <Badge>2021</Badge>
        </Title>
        <P>
          Website for searching for a movie using external movies database API and with title search functionality hosted on Netlify
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>React frontend project</Meta>
            <Link href='https://beket-movies.netlify.app/'>
              Website link<ExternalLinkIcon mx="2px"/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Netlify</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, REACT, styled-components, REST API</span>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/beket_movies1.png" alt="Beket-Movies"/>
        <ProjectImage src="/images/projects/beket_movies2.png" alt="Beket-Movies"/>
        <ProjectImage src="/images/projects/beket_movies3.png" alt="Beket-Movies"/>
      </Container>
    </Layout>
  )
}

export default Project