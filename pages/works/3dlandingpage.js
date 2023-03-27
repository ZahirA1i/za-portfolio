import {
    Container,
    Badge,
    List,
    ListItem,
    Link,
    
  } from '@chakra-ui/react'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from "../../components/layouts/article"
import { ExternalLinkIcon } from '@chakra-ui/icons'



  
const Work = () => {
    return (
        <Layout title="3D Landingpage">
            <Container>
                <Title>
                    3D Landing Page <Badge>2023</Badge>
                </Title>
                <P>
                For this 3D landing page, I developed, by using threeJS. This was my first time using threeJS, but I would say it was fun to build. I also used Blender to export my 3D object, which also was a learning curve for me. But overall I think I was satisfied with how it came about, and was definitely a learning experience for sure. 
                </P>
                <List ml={4} my={4}>

                    <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                    </ListItem>
                    <Meta>Stack</Meta>
                    <span>React, threeJS, Blender</span>
                    <ListItem>
                    <Meta>Role</Meta>
                    <span>Developer & Designer</span>
                    </ListItem>

                    <ListItem>
                    <Meta>Demo</Meta>
                    <Link href='https://zahir-portfolio.vercel.app/'>
                    https://zahir-portfolio.vercel.app/ <ExternalLinkIcon mx="2px"/>
                    </Link>
                    </ListItem>

                    <ListItem>
                    <Meta>Github Repo</Meta>
                    <Link href='https://github.com/ZahirA1i/3D-LandingPage'>
                    https://github.com/ZahirA1i/3D-LandingPage <ExternalLinkIcon mx="2px"/>
                    </Link>
                    </ListItem>


                </List>

                <WorkImage src="/images/contents/3DLandingpage/3dweb.png" alt="Img"/>

            </Container>
        </Layout>
    )
}

export default Work