import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  width: 196px;
  display: flex;
  display:row;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`


const Logo = () => {
  const catpawImg = `/images/logo${useColorModeValue('-dark', '-dark')}.png`

  return(
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={catpawImg} width={45} height={45} alt="logo"/>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={10}
          > Beket Barlykov
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo;