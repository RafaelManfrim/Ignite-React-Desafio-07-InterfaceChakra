import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Link from "next/link";

interface HeaderProps {
    backArrow?: boolean;
}

export function Header({ backArrow }: HeaderProps) {
    return (
        <Flex w="100%" maxWidth="1440px" py="4" px={["12", "24"]} justify={backArrow ? "space-between" : "center"} align="center">
            {backArrow && (
                <ChakraLink as={Link} href='/' passHref>
                    <ChevronLeftIcon  fontSize="32" _hover={{ cursor: 'pointer' }}  />
                </ChakraLink>
            )}
            <Image src="/Logo.svg" alt="Logo" h="16"/>
            {backArrow && <Flex></Flex>}
        </Flex>
    )
}