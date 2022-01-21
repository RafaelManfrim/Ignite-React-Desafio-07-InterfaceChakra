import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from 'next/router'
import { CityCard } from "../../components/CityCard";
import { Header } from "../../components/Header";
import { NumberHighlight } from "../../components/NumberHighlight";

export default function Continent() {
    const router = useRouter()
    const { name: continent } = router.query
    const continentPage = {
        europa: {
            continent: "Europa",
            description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
            bannerImage: "/Banners/BannerEuropa.svg",
            countries: 50,
            languages: 60,
            numberCities100: 27,
            cities100: [
                {
                    city:"Londres", 
                    country:"Reino Unido", 
                    cardBanner:"/Cities/Londres.svg", 
                    countryFlag:"/CountryFlags/UK.svg"
                },
                {
                    city:"Paris", 
                    country:"França", 
                    cardBanner:"/Cities/Paris.svg", 
                    countryFlag:"/CountryFlags/France.svg"
                },
                {
                    city:"Roma", 
                    country:"Itália", 
                    cardBanner:"/Cities/Roma.svg", 
                    countryFlag:"/CountryFlags/Italy.svg"
                },
                {
                    city:"Praga", 
                    country:"República Tcheca", 
                    cardBanner:"/Cities/Praga.svg", 
                    countryFlag:"/CountryFlags/CzechRepublic.svg"
                },
                {
                    city:"Amsterdã",
                    country:"Holanda",
                    cardBanner:"/Cities/Amsterda.svg", 
                    countryFlag:"/CountryFlags/Netherlands.svg"
                }
            ]
        },
        america: {
            continent: "America",
            description: "América é o maior continente em extensão norte–sul localizado no Hemisfério Ocidental e compreende uma área total de 42.189.120 km2. O continente é habitado por cerca de 902.892.047 pessoas, e nele são faladas diversas línguas, como espanhol, inglês, português, francês, neerlandês e línguas nativas.",
            bannerImage: "/Banners/BannerEuropa.svg",
            countries: 50,
            languages: 60,
            numberCities100: 27,
            cities100: [
                {
                    city:"Nova York", 
                    country:"Estados Unidos", 
                    cardBanner:"/Cities/Londres.svg", 
                    countryFlag:"/CountryFlags/UK.svg"
                },
                {
                    city:"Las Vegas", 
                    country:"Estados Unidos", 
                    cardBanner:"/Cities/Paris.svg", 
                    countryFlag:"/CountryFlags/France.svg"
                },
                {
                    city:"Miami", 
                    country:"Estados Unidos", 
                    cardBanner:"/Cities/Roma.svg", 
                    countryFlag:"/CountryFlags/Italy.svg"
                },
                {
                    city:"Los Angeles", 
                    country:"Estados Unidos", 
                    cardBanner:"/Cities/Praga.svg", 
                    countryFlag:"/CountryFlags/CzechRepublic.svg"
                },
                {
                    city:"Orlando",
                    country:"Estados Unidos", 
                    cardBanner:"/Cities/Amsterda.svg", 
                    countryFlag:"/CountryFlags/Netherlands.svg"
                },
                {
                    city:"Rio de Janeiro",
                    country:"Brasil", 
                    cardBanner:"/Cities/Amsterda.svg", 
                    countryFlag:"/CountryFlags/Netherlands.svg"
                },
                {
                    city:"São Paulo",
                    country:"Brasil", 
                    cardBanner:"/Cities/Amsterda.svg", 
                    countryFlag:"/CountryFlags/Netherlands.svg"
                },
            ]
        },
    }

    const data = continentPage[continent]

    function renderCities100() {
        return data.cities100.map(city => {
            return <CityCard key={city.city} city={city.city} country={city.country} cardBanner={city.cardBanner}  countryFlag={city.countryFlag}  />
        })
    }

    return (
        <Flex direction="column" align="center" w="100%">
            <Head>
                <title>{continent} - worldtrip</title>
                <link rel="shortcut icon" href="/Airplane.svg" type="image/svg" />
            </Head>
            <Header backArrow />
            <Flex bgImage={data.bannerImage} w="100%" maxWidth="1440px" h="500px" align="flex-end">
                <Text color="gray.100" fontWeight={600} fontSize="5xl" casing='capitalize' p="24" px={["12", "24"]}>{continent}</Text>
            </Flex>
            <Flex px={["12", "24"]}  w="100%" maxWidth="1440px" direction={["column", "column", "row"]} pb="8">
                <Box w={["100%", "100%", "50%" ]} pt="8">
                    <Text align="justify">{data.description}</Text>
                </Box>
                <Flex w={["100%", "100%", "50%" ]} justify="space-evenly" pt="8">
                    <NumberHighlight title={data.countries} description="Países" />
                    <NumberHighlight title={data.languages} description="Línguas" />
                    <NumberHighlight title={data.numberCities100} description="Cidades +100" />
                </Flex>
            </Flex>
            <Flex direction="column" justify="start" w="100%" maxWidth="1440px" px={["12", "24"]} pb="4">
                <Text color="gray.500" fontSize="2xl" fontWeight="semibold" mb="4">Cidades +100</Text>
                <SimpleGrid minChildWidth='200px' spacing='32px'>
                    {renderCities100()}
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}
