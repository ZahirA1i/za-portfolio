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
        <Layout title="Total Alchemy">
            <Container>
                <Title>
                    Total Alchemy<Badge>2023</Badge>
                </Title>
                <P>
                Total Alchemy is a brand in Vancouver that involves the underground trap sounds of today's hip-hop / rap scene. They are an upcoming brand on the rise, and I was reached out to get the chance to create some designs for them for potential branding / merch. From these designs, I was given a mood board of keywords residing in the brand's outlook. From the keywords and samples that I was supplied, I created some of the designs that were in my full creative control.  I designed a range of logos to stickers and posters. 

                </P>
                <List ml={4} my={4}>

        
                    <Meta>Stack</Meta>
                    <span>Adobe Illustator & Photoshop</span>
                    <ListItem>
                    <Meta>Role</Meta>
                    <span>Designer</span>
                    </ListItem>

                    <ListItem>

                    </ListItem>


                </List>

                

                <WorkImage src="/images/contents/Posters/TAposter.png" alt="Poster"/>
                <WorkImage src="/images/contents/TA/stickersTA.png" alt="PSP Stickers"/>
                <WorkImage src="/images/contents/TA/cdsTA.png" alt="CDs"/>
                <WorkImage src="/images/contents/TA/logos1TA.png" alt="Logos v1"/>
                <WorkImage src="/images/contents/TA/logo2TA.png" alt="Logos v2"/>
                <WorkImage src="/images/contents/TA/logo3TA.png" alt="Logos v3"/>

                

            </Container>
        </Layout>
    )
}

export default Work