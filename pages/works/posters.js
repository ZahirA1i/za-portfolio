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
        <Layout title="Vector Art">
            <Container>
                <Title>
                    Poster Graphics <Badge>2021-2023</Badge>
                </Title>
                <P>
                I use my skills in Photoshop to create stunning posters that grab attention and communicate messages effectively. I use a variety of tools to manipulate images and graphics, create custom shapes and patterns, add textures and gradients, and use filters to enhance the visual impact. I also use my knowledge of composition to arrange elements in a way that draws the viewer's eye to the most important parts


                </P>
                <List ml={4} my={4}>

        
                    <Meta>Stack</Meta>
                    <span>Adobe Photoshop</span>
                    <ListItem>
                    <Meta>Role</Meta>
                    <span>Designer</span>
                    </ListItem>

                    <ListItem>

                    </ListItem>


                </List>

                

                <WorkImage src="/images/contents/Posters/rx7.png" alt="Rx7"/>
                <WorkImage src="/images/contents/Posters/TAposter.png" alt="TA Poster"/>
                <WorkImage src="/images/contents/Posters/alphonso.png" alt="Alphonso Poster"/>
                <WorkImage src="/images/contents/Posters/makposter.png" alt="Vancouver Grizzlies Poster"/>
                <WorkImage src="/images/contents/Posters/sketch.png" alt="Sketch"/>

                

            </Container>
        </Layout>
    )
}

export default Work