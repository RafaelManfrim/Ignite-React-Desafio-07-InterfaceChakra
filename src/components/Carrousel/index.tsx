import { Box, Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CarrouselItem } from "./CarrouselItem";

export function Carrousel() {
    const continents = [
        {
            title:"Europa", 
            description:"O continente mais antigo", 
            bgImage:"ContinentEurope.svg",
            value: "europa"
        },
        {
            title:"América", 
            description:"O maior em extensão Norte-Sul", 
            bgImage:"ContinentEurope.svg",
            value: "america"
        },
        {
            title:"Ásia",
            description:"O continente mais rico",
            bgImage:"ContinentEurope.svg",
            value: "asia"
        },
        {
            title:"África",
            description:"O berço da humanidade",
            bgImage:"ContinentEurope.svg",
            value: "africa"
        },
        {
            title:"Oceania",
            description:"O lar dos cangurus",
            bgImage:"ContinentEurope.svg",
            value: "oceania"
        }
    ]

    function renderContinentInCarrousel() {
        return continents.map(continent => {
            return (
                <SwiperSlide key={continent.title}>
                    <CarrouselItem  title={continent.title} description={continent.description} bgImage={continent.bgImage} value={continent.value} />
                </SwiperSlide>
        )})
    }

    return (
        <Flex direction="column" px={["12", "24"]} py="8" w="100%" maxWidth="1440px">
            <Flex direction="column" align="center" justify="center" w="100%">
                <Text color="gray.500" fontSize={["xl", "2xl"]}>Vamos nessa?</Text>
                <Text color="gray.500" fontSize={["lg", "xl", "2xl"]}>Então escolha seu continente</Text>
            </Flex>
            <Box py="8">
                <Swiper 
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {renderContinentInCarrousel()}
                </Swiper>
            </Box>
        </Flex>
    )
}