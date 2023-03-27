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
        <Layout title="VanMarket">
            <Container>
                <Title>
                    VanMarket <Badge>2022</Badge>
                </Title>
                <P>
                VanMarket is a mobile app that aims to provide convenience and save time for people looking to exchange products or services locally. Our marketplace app allows users to buy and sell easily and safely, eliminating the need to visit multiple retail locations or online platforms. With VanMarket, users can conduct transactions seamlessly through the app, enabling a hassle-free and efficient experience. For this project, we had to collaborate with full stack developers and maintain strong communication for changes to our design and making sure it fitted in the time frame the developers had to code. My contribution was designing and prototyping the main UI in Figma. 

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