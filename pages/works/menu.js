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
        <Layout title="MEnU">
            <Container>
                <Title>
                    MEnU <Badge>2022</Badge>
                </Title>
                <P>
                    MEnU description here
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

                <WorkImage src="/images/contents/MEnU/MEnUSS.png" alt="MEnU"/>

                <span>Style Guide</span>

                <WorkImage src="/images/contents/MEnU/MEnUSG.png" alt="MEnU"/>
                {/* <WorkImage src="" alt="MEnU"/>
                <WorkImage src="" alt="MEnU"/>
                <WorkImage src="" alt="MEnU"/>
                <WorkImage src="" alt="MEnU"/> */}
            </Container>
        </Layout>
    )
}

export default Work