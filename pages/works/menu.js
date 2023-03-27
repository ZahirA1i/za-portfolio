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
                MEnU is a mobile app designed specifically for single parents to help them find balance in their busy lives. The app offers a range of features, including meditation exercises and bonding activities for parents to enjoy with their kids. MEnU is designed with easy navigation and user-friendly features to make it quick and easy for single parents to use in their intense routines. With MEnU, single parents can find peace and balance in their lives while also enjoying quality time with their children. In this team, we had 3 designers and 3 developers. My contribution included designing and prototyping the app in Figma, with also testing different colour combos and graphics. 
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