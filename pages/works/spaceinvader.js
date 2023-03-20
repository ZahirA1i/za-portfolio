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
        <Layout title="Space Invaderz">
            <Container>
                <Title>
                Space Invaderz<Badge>2022</Badge>
                </Title>
                <P>
                    description here
                </P>
                <List ml={4} my={4}>

        
                    <Meta>Stack</Meta>
                    <span>Javascript, HTML</span>
                    <ListItem>
                    <Meta>Role</Meta>
                    <span>Developer & Designer</span>
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