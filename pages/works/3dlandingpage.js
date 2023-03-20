import {
    Container,
    Badge,
    List,
    ListItem,
    
  } from '@chakra-ui/react'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from "../../components/layouts/article"



  
const Work = () => {
    return (
        <Layout title="3D Landingpage">
            <Container>
                <Title>
                    3D Landing Page <Badge>2023</Badge>
                </Title>
                <P>
                    description here
                </P>
                <List ml={4} my={4}>

                    <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                    </ListItem>
                    <Meta>Stack</Meta>
                    <span>React, threeJS</span>
                    <ListItem>
                    <Meta>Role</Meta>
                    <span>Developer + Designer</span>
                    </ListItem>

                    <ListItem>

                    </ListItem>


                </List>

                <WorkImage src="" alt=""/>

            </Container>
        </Layout>
    )
}

export default Work