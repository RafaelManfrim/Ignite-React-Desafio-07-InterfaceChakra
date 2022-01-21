import { Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from 'next/link'

interface CarrouselItemProps {
    title: string;
    description: string;
    value: string;
    bgImage: string;
}

export function CarrouselItem({ title, description, bgImage, value }: CarrouselItemProps) {
    return (
        <Flex direction="column" align="center" justify="center" backgroundImage={`/Slider/${bgImage}`} maxWidth="1240px" h="450px">
            <ChakraLink as={Link} href={`/continente/${value}`} passHref>
                <Text color="gray.100" fontSize={["xl", "2xl", "3xl", "4xl"]} fontWeight="bold" cursor="pointer" _hover={{ color: "#FFBA08"}}>{title}</Text>
            </ChakraLink>
            <Text color="gray.100" fontSize={["lg", "lg", "xl", "2xl"]}>{description}</Text>
        </Flex>
    )
}