import {  Box, Container, Heading } from "@chakra-ui/react"
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I'm a Designer/Developer based in Vancouver, BC
            </Box>

            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
            <Heading as="h2" variant={"page-title"}>
                Zahir Ali
            </Heading>
        <p>Designer/Deveolper</p>
            </Box>
            </Box>
        </Container>
        
    )
}

export default Page