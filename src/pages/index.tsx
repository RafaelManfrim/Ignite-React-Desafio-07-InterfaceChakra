import { Flex, SimpleGrid } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Banner } from '../components/Banner'
import { Divider } from '../components/Divider'
import { Header } from '../components/Header'
import { Carrousel } from '../components/Carrousel'
import { TravelType } from '../components/TravelType'

const Home: NextPage = () => {
  const travelTypes = [
    {
      type:"cocktail", 
      description:"Vida noturna"
    },
    {
      type:"surf", 
      description:"Praia"
    },
    {
      type:"building", 
      description:"Moderno"
    },
    {
      type:"museum", 
      description:"Clássico"
    },
    {
      type:"earth", 
      description:"Pelo mundo"
    }
  ]

  function renderTravelTypes() {
    return travelTypes.map(travelType => <TravelType key={travelType.type} type={travelType.type} description={travelType.description} />)
  }

  return (
    <Flex direction="column" align="center" w="100%">
      <Head>
        <title>worldtrip</title>
        <link rel="shortcut icon" href="/Airplane.svg" type="image/svg" />
      </Head>
      <Header />
      <Banner />
      <Flex direction="column" w="100%" maxWidth="1440px" px={["12", "24"]} py="8">
        <SimpleGrid minChildWidth='64px' spacing="20px">
          {renderTravelTypes()}
        </SimpleGrid>
      </Flex>
      <Divider />
      <Carrousel />
    </Flex>
  )
}

export default Home
