import { Flex, Text } from "@chakra-ui/react";

interface NumberHighlightProps {
    title: string;
    description: string;
}

export function NumberHighlight({ title, description }: NumberHighlightProps) {
    return (
        <Flex direction="column" align="center">
            <Text fontSize="3xl" color="#FFBA08" fontWeight="semibold">{title}</Text>
            <Text fontWeight="semibold" color="gray.600">{description}</Text>
        </Flex>
    )
}