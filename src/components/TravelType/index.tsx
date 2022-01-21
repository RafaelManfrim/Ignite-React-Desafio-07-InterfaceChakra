import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelTypeProps {
    type: string;
    description: string;
}

export function TravelType({ type, description }: TravelTypeProps) {
    
    return (
        <Flex direction="column" align="center" justify="space-evenly">
            <Image alt={`Tipo de viagem: ${description}`} src={`/HomeSVGs/${type}.svg`} w={["12", "16", "20"]} mb="4"/>
            <Text color="gray.600" fontWeight={600} fontSize={["10", "12", "16"]}>{description}</Text>
        </Flex>
    )
}