import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Banner } from '../components/Banner'
import { Divider } from '../components/Divider'
import { Header } from '../components/Header'
import { Slider } from '../components/Slider'
import { TravelType } from '../components/TravelType'
import { TravelTypesArea } from '../components/TravelTypesArea'

const Home: NextPage = () => {
  return (
    <Flex direction="column" align="center" w="100vw">
      <Head>
        <title>worldtrip</title>
        <link rel="shortcut icon" href="/Airplane.svg" type="image/svg" />
      </Head>
      <Header />
      <Banner />
      <TravelTypesArea>
        <TravelType type="cocktail" description="Vida noturna" />
        <TravelType type="surf" description="Praia" />
        <TravelType type="building" description="Moderno" />
        <TravelType type="museum" description="Clássico" />
        <TravelType type="earth" description="Pelo mundo" />
      </TravelTypesArea>
      <Divider />
      <Slider />
    </Flex>
  )
}

export default Home
