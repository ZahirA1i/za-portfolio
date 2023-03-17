import Link from 'next/link'
import Image from 'next/image'
import { useColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 20px;
line-height: 20px;
padding: 10px;
// margin-left: 80px;


`

const Logo = () => {
    const Img = `/images/contents/Logo${useColorModeValue('','')}.png`

    return(
        <Link href="/">
            
                <LogoBox>
                    <Image src={Img} width={100} height={100} alt="logo"/>
                </LogoBox>
           
        </Link>
    )
}

export default Logo