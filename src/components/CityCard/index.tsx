import { Flex, Image, Text } from "@chakra-ui/react";

interface CityCardProps {
    city: string;
    country: string;
    cardBanner: string;
    countryFlag: string;
}

export function CityCard({ city, country, cardBanner, countryFlag }: CityCardProps) {
    return (
        <Flex direction="column">
            <Image src={cardBanner} alt={`Foto de ${city}`} />
            <Flex p="4" justify="space-around" border="1px" borderColor="#FFBA08" borderTop="none">
                <Flex direction="column">
                    <Text fontSize="14">{city}</Text>
                    <Text color="gray.300" fontSize="12">{country}</Text>
                </Flex>
                <Flex>
                    <Image src={countryFlag} alt={`Bandeira do ${country}`} />
                </Flex>
            </Flex>
        </Flex>
    )
}