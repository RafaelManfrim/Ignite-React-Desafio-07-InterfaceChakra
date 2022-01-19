import { Flex } from "@chakra-ui/react";

interface TravelTypesAreaProps {
    children: React.ReactNode
}

export function TravelTypesArea({ children }: TravelTypesAreaProps) {
    return (
        <Flex px="24" py="8" justify="space-between" h={"220px"} w="100%" maxWidth="1440px">
            {children}
        </Flex>
    )
}