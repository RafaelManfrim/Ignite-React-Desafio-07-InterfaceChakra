import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <Flex bgImage="url('/HomeSVGs/Background.svg')" px="24" justify="space-between" h={"335px"} w="100%" maxWidth="1440px">
            <Flex direction="column" justify="center">
                <Text color="gray.100" fontSize={["xl", "2xl", "3xl"]}>5 Continentes, infinitas possibilidades.</Text>
                <Text color="gray.400">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
            </Flex>
            <Image src="/HomeSVGs/Airplane.svg" alt="Airplane Image" h="90%" mt="64px" />
        </Flex>
    )
}