import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from "../components/layouts/article"

import thumbMEnU from "../public/images/contents/MEnU/thumbMEnU.png"
import thumbVanMarket from "../public/images/contents/VanMarket/thumbVanMarket.png"

import thumbTA from "../public/images/contents/TA/thumbTA.png"
import thumbPoster from "../public/images/contents/Posters/thumbPoster.png"
import thumbVector from "../public/images/contents/Vectors/thumbVector.png"

import thumbSpaceInvader from "../public/images/contents/SpaceInvader/thumbSpaceInvader.png"
import thumb3DLanding from "../public/images/contents/3DLandingpage/thumb3DLP.png"

const Works = () => {
    return (
        <Layout>
        <Container>


            {/* //Design work// */}
            <Heading as ="h3" fontSize={20} mb={4}>
                Design Work
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem id="tayvr" title="Total Alchemy" thumbnail={thumbTA}>
                    
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id="posters" title="Posters" thumbnail={thumbPoster}>
                    
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id="vectors" title="Vectors" thumbnail={thumbVector}>
                    
                </WorkGridItem>
            </Section>
            </SimpleGrid>


            <Divider my={6} />


            {/* //UX UI// */}
            <Heading as ="h3" fontSize={20} mb={4}>
                UX/UI Design Work
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem id="menu" title="MEnU" thumbnail={thumbMEnU}>
                    
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id="vanmarket" title="VanMarket" thumbnail={thumbVanMarket}>
                    
                </WorkGridItem>
            </Section>
            </SimpleGrid>


            <Divider my={6} />


            {/* Web Dev work */}
            <Heading as ="h3" fontSize={20} mb={4}>
                Web Development Work
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem id="spaceinvader" title="Space Invaderz" thumbnail={thumbSpaceInvader}>
                    
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id="3dlandingpage" title="3D Landing page" thumbnail={thumb3DLanding}>
                    
                </WorkGridItem>
            </Section>
            </SimpleGrid>


        </Container>
        </Layout>
    )
}

export default Works