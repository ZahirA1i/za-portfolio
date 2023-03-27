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
                    Vector Art <Badge>2022-2023</Badge>
                </Title>
                <P>
                With my skills in Illustrator, I create stunning designs that are both visually appealing and highly versatile. I have mastered colour theory, composition, and the ability to manipulate various vector tools. I use a variety of vector tools to create custom shapes, paths, and lines, and pay close attention to the overall layout and composition of the artwork. I use my skills in vector art to create high-quality and versatile artwork that is sure to make a lasting impression.


                </P>
                <List ml={4} my={4}>

        
                    <Meta>Stack</Meta>
                    <span>Adobe Illustator</span>
                    <ListItem>
                    <Meta>Role</Meta>
                    <span>Designer</span>
                    </ListItem>

                    <ListItem>

                    </ListItem>


                </List>

                

                <WorkImage src="/images/contents/Vectors/vstheworld.png" alt="Zahir vs the WORLD"/>
                <WorkImage src="/images/contents/Vectors/zxhirweb.png" alt="zxhir.ca"/>
                <WorkImage src="/images/contents/TA/stickersTA.png" alt="PSP Stickers"/>
                <WorkImage src="/images/contents/Vectors/360.png" alt="360 controller"/>
                <WorkImage src="/images/contents/TA/logos1TA.png" alt="Logos v1"/>
                <WorkImage src="/images/contents/TA/logo2TA.png" alt="Logos v2"/>
                <WorkImage src="/images/contents/TA/logo3TA.png" alt="Logos v3"/>
                <WorkImage src="/images/contents/Vectors/beastlogos.png" alt="Beast logos"/>
                <WorkImage src="/images/contents/Vectors/saiki.png" alt="Saiki Energy Mockup"/>
                

                

            </Container>
        </Layout>
    )
}

export default Work