import { Flex, Image } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex w="100%" justify="center" align="center" p="8">
            <Image alt="logo" src="/Logo.svg" h="12" />
        </Flex>
    )
}