import { Container, Heading, SimpleGrid, } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from "../components/layouts/article"

import thumbMEnU from "../public/images/contents/MEnU/thumbMEnU.png"
import thumbVanMarket from "../public/images/contents/VanMarket/thumbVanMarket.png"

const Works = () => {
    return (
        <Layout>
        <Container>

            {/* //UX UI// */}
            <Heading as ="h3" fontSize={20} mb={4}>
                UX/UI Design Work
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem id="menu" title="MEnU" thumbnail={thumbMEnU}>
                    MEnU description here
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id="vanmarket" title="VanMarket" thumbnail={thumbVanMarket}>
                    VanMarket description here
                </WorkGridItem>
            </Section>
            </SimpleGrid>


            {/* //Design work// */}
            <Heading as ="h3" fontSize={20} mb={4}>
                Design Work
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem id="menu" title="MEnU" thumbnail={thumbMEnU}>
                    MEnU description here
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id="menu" title="MEnU" thumbnail={thumbMEnU}>
                    MEnU description here
                </WorkGridItem>
            </Section>
            </SimpleGrid>


            {/* Web Dev work */}
            <Heading as ="h3" fontSize={20} mb={4}>
                Web Development Work
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem id="menu" title="MEnU" thumbnail={thumbMEnU}>
                    MEnU description here
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id="menu" title="MEnU" thumbnail={thumbMEnU}>
                    MEnU description here
                </WorkGridItem>
            </Section>
            </SimpleGrid>


        </Container>
        </Layout>
    )
}

export default Works