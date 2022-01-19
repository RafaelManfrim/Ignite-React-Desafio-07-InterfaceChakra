import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelTypeProps {
    type: string;
    description: string;
}

export function TravelType({ type, description }: TravelTypeProps) {
    return (
        <Flex direction="column" align="center" justify="space-evenly">
            <Image alt={`Tipo de viagem: ${description}`} src={`/HomeSVGs/${type}.svg`} />
            <Text color="gray.600" fontWeight={600}>{description}</Text>
        </Flex>
    )
}