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
                <List ml={4} my={4}>

                    <ListItem>
                    <Meta>Platform</Meta>
                    <span>Mobile</span>
                    </ListItem>
                    <Meta>Stack</Meta>
                    <span>Figma</span>
                    <ListItem>
                    <Meta>Role</Meta>
                    <span>UX/UI Designer</span>
                    </ListItem>

                    <ListItem>

                    </ListItem>


                </List>

                <span>Screenshots</span>

                <WorkImage src="/images/contents/VanMarket/VanMSS.png" alt="VanMarket"/>

                <span>Style Guide</span>

                <WorkImage src="/images/contents/VanMarket/VanMSG.png" alt="VanMarket"/>

            </Container>
        </Layout>
    )
}

export default Work