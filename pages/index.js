import {  Box, Button, Container, Heading, Icon, Image, Link, List, ListItem } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'
import { BioSection , BioBold } from "../components/bio"
import Layout from "../components/layouts/article"
import { IoLogoGithub, IoMail, IoCall } from 'react-icons/io5'

  
const Page = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg="#B68BE8" p={3} mb={6} align="center">
                Hello, I'm a Designer/Developer based in Vancouver, BC
            </Box>

            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
            <Heading as="h2" variant={"page-title"}>
                Zahir Ali
            </Heading>
        <p>Digital Creator (Designer/Developer)</p>
            </Box>
            <Box 
            flexShrink={0}
             mt={{base: 4, md: 0}} 
             ml={{md: 6}}
             align="center"
             >
                <Image 
                borderColor="whiteAlpha.800"
                 borderWidth={2} 
                 borderStyle="solid"
                  maxWidth="100px" 
                  display="inline-block" 
                  borderRadius="full" 
                  src="/images/contents/zaa.png"
                  alt="Profile Image"
                  />
            </Box>
            </Box>

        <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
            About
        </Heading>
        <Paragraph>Hi, my name is Zahir and I'm 20 years old, born and raised in Vancouver, BC. I have a passion for design and a keen eye for detail, which allows me to create visually stunning and effective designs for a variety of mediums. My education in graphic design and my ongoing professional development have provided me with a strong foundation in design principles, typography, colour theory, and software tools. I am highly motivated, organized, and able to work collaboratively or independently with clients and team members to deliver projects on time and within budget</Paragraph>
        <Box align="center" my={4}>
            <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon/>} colorScheme="purple">
                    My Portfolio
                </Button>
            </NextLink>
        </Box>
        </Section>

        <Section delay={0.2}>
            <Heading as="h3" variant="section-title" >
                Bio
            </Heading>

            <BioSection>
                <BioBold>2002</BioBold>
                Born in Vancouver, Canada.
            </BioSection>

            <BioSection>
                <BioBold>2020</BioBold>
                Graduated from New Westminster Secondary School
            </BioSection>

            <BioSection>
                <BioBold>2023</BioBold>
                Digital Design and Development program at BCIT
            </BioSection>

            <BioSection>
                <BioBold>2023</BioBold>
                Practicum/Freelance work
            </BioSection>

        </Section>

        <Section delay={0.3}>
            <Heading as="h3" variant="section-title" >
                Tech Stack
            </Heading>

            <BioBold>
                Adobe Creative Suite,  Figma,  HTML5,  CSS3,  Next JS,  React Native,  Git,  Firebase,  Wordpress
            </BioBold>

        </Section>

        <Section delay={0.4}>
            <Heading as="h3" variant="section-title" >
                I ♥
            </Heading>

            <BioBold>
                Creating & Designing, Music, Video Games, Anime & Manga, Movies, Basketball, Soccer, Golf, and of course sleeping and eating food lol
            </BioBold>

        </Section>

        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Connect with me
            </Heading>
            <List>

            <ListItem>
            <Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoCall}/>}>
                    778-858-6904
            </Button>
            </ListItem>

            <ListItem>
                <Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoMail}/>}>
                        zahirali1800@gmail.com
                </Button>
            </ListItem>

            <ListItem>
            <Link href="https://github.com/ZahirA1i" target="_blank">
                <Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoLogoGithub}/>}>
                        @ZahirA1i
                </Button>
            </Link>
            </ListItem>

           



            </List>
        </Section>

        </Container>
        </Layout>
        
    )
}

export default Page