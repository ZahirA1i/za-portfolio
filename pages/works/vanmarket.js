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
        <Layout title="VanMarket">
            <Container>
                <Title>
                    VanMarket <Badge>2022</Badge>
                </Title>
                <P>
                    VanMarket description here
                </P>
            </Container>
        </Layout>
    )
}

export default Work