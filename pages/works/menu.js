import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from "../../components/layouts/article"



  
const Work = () => {
    return (
        <Layout title="MEnU">
            <Container>
                <Title>
                    MEnU <Badge>2022</Badge>
                </Title>
                <P>
                    MEnU description here
                </P>
            </Container>
        </Layout>
    )
}

export default Work